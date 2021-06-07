import { useState, useRef } from 'react'
import L from 'leaflet'
import {
  MapContainer,
  TileLayer,
  Marker,
  MapConsumer,
  Popup,
  Tooltip,
} from 'react-leaflet'
import 'leaflet-loading'
import { Times as TimesIcon } from '@styled-icons/fa-solid'
import { Plus as PlusIcon } from '@styled-icons/fa-solid'

import PlacePane from 'components/PlacePane'
import MapHeader from './MapHeader'

import * as S from './styles'

type Cordinates = {
  longitude: number
  latitude: number
}

type ImageProps = {
  url: string
  height: number
  width: number
}

type Place = {
  id: string
  name: string
  slug: string
  visited: boolean
  visible: boolean
  resume?: string
  aboutText?: {
    html: string
    text: string
  }
  gallery: ImageProps[]
  image?: {
    url: string
  }
  tags?: [string]
  cordinates: Cordinates
}

export type MapProps = {
  places?: Place[]
}

type AdressProps = {
  geometry: {
    bounds: any
    location: any
  }
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = ({ places }: MapProps) => {
  const baseIcon = {
    iconUrl: '/img/light-orb.png',
    iconSize: [60, 60],
    iconAnchor: [27, 27],
  }

  const [map, setMap] = useState()
  // @ts-ignore
  const [mapCenter, setMapCenter] = useState([-15, -45])
  const [mapZoom, setMapZoom] = useState(3)
  const markersRefs = useRef([])
  // @ts-ignore
  const [iconMarker, setIconMarker] = useState(
    // @ts-ignore
    L.divIcon({
      ...baseIcon,
    })
  )
  const [currFilters, setCurrFilters] = useState({
    tags: [],
  })

  const [isPlacePaneOpen, setIsPlacePaneOpen] = useState(false)
  const [currentSlug, setCurrentSlug] = useState(null)

  const closePlace = () => {
    closePopupFix()
    setIsPlacePaneOpen(false)
    setTimeout(() => setCurrentSlug(null), 300)
  }

  const openPlace = (slug: string) => {
    let delayToShow = 0
    if (isPlacePaneOpen) {
      setIsPlacePaneOpen(false)
      delayToShow = 300
    }

    setTimeout(() => {
      // @ts-ignore
      setCurrentSlug(slug)
      setIsPlacePaneOpen(true)
      const cordinates = places?.filter((place) => place.slug === slug)[0]
        .cordinates
      const offset = {
        x: window.innerWidth > 768 ? 0.0002 : 0,
        y: window.innerWidth > 768 ? 0.0008 : 0,
      }
      // @ts-ignore
      map.flyTo(
        {
          // @ts-ignore
          lat: cordinates.latitude + offset.x,
          // @ts-ignore
          lng: cordinates.longitude + offset.y,
        },
        18,
        {
          animated: true,
          duration: 2,
        }
      )
      setMapZoom(18)
    }, delayToShow)
  }

  const closePopupFix = () => {
    const popupSelector = document.querySelector('.leaflet-popup-close-button')
    if (popupSelector) {
      // @ts-ignore
      popupSelector.click()
    }
  }

  const onMarkerClick = (slug: string) => {
    openPlace(slug)
  }

  const zoomOut = () => {
    // @ts-ignore
    if (map) map.flyTo(mapCenter, 3, { animated: true, duration: 1.5 })
    closePlace()
  }

  const setMapPosition = (adress: AdressProps) => {
    closePlace()
    if (adress.geometry.bounds) {
      const bounds = adress.geometry.bounds
      // @ts-ignore
      const parsedBounds = Object.values(bounds)
      // @ts-ignore
      map.flyToBounds([
        // @ts-ignore
        [parsedBounds[0].g, parsedBounds[1].g],
        // @ts-ignore
        [parsedBounds[0].i, parsedBounds[1].i],
      ])
    } else if (adress.geometry.location) {
      // @ts-ignore
      map.flyTo(
        {
          lat: adress.geometry.location.lat(),
          lng: adress.geometry.location.lng(),
        },
        17,
        { animated: true, duration: 1.5 }
      )
    }
  }

  return (
    <>
      <PlacePane
        // @ts-ignore
        data={
          currentSlug
            ? { ...places?.filter((place) => place.slug === currentSlug)[0] }
            : {}
        }
        isVisible={isPlacePaneOpen}
        closePane={() => {
          closePlace()
        }}
      />

      <S.MapWrapper
        className={`${mapZoom > 14 ? 'upperMarkers' : ''} ${
          isPlacePaneOpen ? 'isPlacePaneOpen' : ''
        }`}
      >
        <MapHeader
          /* @ts-ignore */
          setMapPosition={setMapPosition}
          /* @ts-ignore */
          openPlace={openPlace}
          zoomOutMap={zoomOut}
          /* @ts-ignore */
          placesOptions={places?.map((place) => {
            return { label: place.name, value: place.slug }
          })}
          /* @ts-ignore */
          categoriesOptions={places?.map((place) => {
            return { label: place.name, value: place.slug }
          })}
        />
        <MapContainer
          center={[mapCenter[0], mapCenter[1]]}
          attributionControl={false}
          zoom={mapZoom}
          minZoom={3}
          maxBounds={[
            [-80, 220],
            [180, -180],
          ]}
          // @ts-ignore
          loadingControl={true}
          scrollWheelZoom={true}
          // @ts-ignore
          whenCreated={setMap}
          style={{ height: '100%', width: '100%' }}
        >
          <CustomTileLayer />
          <MapConsumer>
            {(map) => {
              const width =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth

              if (width < 768) {
                map.setMinZoom(2)
              }

              map.on('zoomend', () => {
                setMapZoom(map.getZoom())
              })

              return null
            }}
          </MapConsumer>

          {places?.map(({ slug, name, resume, cordinates, gallery }, index) => {
            const { latitude, longitude } = cordinates

            return (
              <Marker
                // @ts-ignore
                useRef={(element) => itemsEls.current.push(element)}
                key={`place-${slug}`}
                position={[latitude, longitude]}
                icon={iconMarker}
                eventHandlers={{
                  click: () => {
                    onMarkerClick(slug)
                  },
                }}
                aria-label={name}
              >
                {/* @ts-ignore */}
                {currentSlug !== slug ? (
                  <Tooltip offset={[14, -29]}>
                    <img alt={name} src={gallery[0].url}></img>
                    <div className="body">
                      <h2 className="name">{name}</h2>
                      <p className="resume">{resume}</p>
                      <span className="span">
                        Clique para abrir <PlusIcon />
                      </span>
                    </div>
                  </Tooltip>
                ) : null}

                <Popup offset={[0, -180]} closeOnClick={false}>
                  <img alt={name} src={gallery[0].url}></img>
                  <div className="body">
                    <h2 className="name">{name}</h2>
                    <p className="resume">{resume}</p>
                    <span
                      onClick={() => {
                        closePopupFix()
                        closePlace()
                      }}
                      className="span"
                    >
                      Clique para fechar <TimesIcon />
                    </span>
                  </div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
      </S.MapWrapper>
    </>
  )
}

export default Map
