import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'

// @ts-ignore
import * as S from './styles.ts'
import 'simplebar/dist/simplebar.min.css'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    id: string
    name: string
    slug: string
    categories: { name: string; value: string; color: { hex: string } }[]
    gallery: ImageProps[]
    resume: string
    cordinates: {
      latitude: number
      longitude: number
    }
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
const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  const offsetY = 0.01

  return (
    <S.MapWrapper>
      <MapContainer
        // @ts-ignore
        center={[
          place.cordinates.latitude + offsetY,
          place.cordinates.longitude,
        ]}
        attributionControl={false}
        zoom={12}
        minZoom={4}
        tap={false}
        maxBounds={[
          [-80, 220],
          [180, -180],
        ]}
        // @ts-ignore
        loadingControl={true}
        scrollWheelZoom={true}
        // @ts-ignore
        style={{ height: '100%', width: '100%' }}
      >
        <CustomTileLayer />
        <Marker
          position={[place.cordinates.latitude, place.cordinates.longitude]}
          icon={L.divIcon({
            iconUrl: '/img/light-orb.png',
            iconSize: [120, 120],
            iconAnchor: [60, 60],
          })}
          aria-label={place.name}
        >
          <Tooltip permanent={true} offset={[14, -29]}>
            <img alt={place.name} src={place.gallery[0].url}></img>
            <div className="body">
              <h2 className="name">{place.name}</h2>
              <p className="resume">{place.resume}</p>
            </div>
          </Tooltip>
        </Marker>
      </MapContainer>
    </S.MapWrapper>
  )
}

export default PlacesTemplate
