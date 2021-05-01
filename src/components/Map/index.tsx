import { useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'
import 'leaflet-loading'

import * as S from './styles'

type Cordinates = {
  longitude: number
  latitude: number
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
  tags?: [string]
  cordinates: Cordinates
}

export type MapProps = {
  places?: Place[]
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
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [10, -44],
  }
  const [map, setMap] = useState()
  // @ts-ignore
  const [mapCenter, setMapCenter] = useState([-15, -55])
  const [mapZoom, setMapZoom] = useState(3)
  // @ts-ignore
  const [iconMarker, setIconMarker] = useState(
    // @ts-ignore
    L.icon({
      ...baseIcon,
    })
  )

  const onMarkerClick = (cordinates: Cordinates) => {
    if (map)
      // @ts-ignore
      map.flyTo({ lat: cordinates.latitude, lng: cordinates.longitude }, 18, {
        animated: true,
        duration: 2,
      })
    setMapZoom(18)
  }

  return (
    <S.MapWrapper>
      <MapContainer
        center={[mapCenter[0], mapCenter[1]]}
        attributionControl={false}
        zoom={mapZoom}
        minZoom={4}
        maxBounds={[
          [-180, 180],
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

            return null
          }}
        </MapConsumer>

        {places?.map(({ slug, name, cordinates }) => {
          const { latitude, longitude } = cordinates

          return (
            <Marker
              key={`place-${slug}`}
              position={[latitude, longitude]}
              title={name}
              icon={iconMarker}
              eventHandlers={{
                click: () => {
                  onMarkerClick(cordinates)
                },
              }}
              aria-label={name}
            ></Marker>
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
