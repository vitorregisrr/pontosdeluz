import { GpsFixed as GpsButton } from '@styled-icons/material'

import * as S from './styles'

type LocationButton = {
  setMapPosition: (
    geometry: {
      geometry: { location: { lat: () => number; lng: () => number } }
    },
    zoom: number
  ) => void
}

const LocationButton = ({ setMapPosition }: LocationButton) => {
  const setGeoLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition((position) => {
        setMapPosition(
          {
            geometry: {
              location: {
                lat: () => position.coords.latitude,
                lng: () => position.coords.longitude,
              },
            },
          },
          14
        )
      })
    }
  }
  return (
    <S.LocationButton onClick={setGeoLocation}>
      <span>
        <GpsButton size="32" />
        <S.ButtonLabel>
          <span>Minha localização</span>
        </S.ButtonLabel>
      </span>
    </S.LocationButton>
  )
}

export default LocationButton
