import { useState } from 'react'
import { StyledIcon } from 'styled-icons/types'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'

import * as S from './styles'

type ValueProps = string

type AdressProps = string

type FormPlacesProps = {
  placeholder?: string
  style?: string
  Icon?: StyledIcon
  onChange?: () => void
}

const FormPlaces = ({ placeholder, onChange, Icon }: FormPlacesProps) => {
  const [inputValue, setInputValue] = useState('')
  const [selectedAdress, setSelectedAdress] = useState({})

  const handleChange = (value: ValueProps) => {
    //@ts-ignore
    setInputValue(value)
  }

  const handleSelect = (address: AdressProps) => {
    setInputValue(address)
    geocodeByAddress(address)
      .then((results) => {
        console.log(results[0])
        return getLatLng(results[0])
      })
      .then((latLng) => setSelectedAdress(latLng))
      .catch((error) => console.error('Error', error))
  }

  console.log(placeholder)

  return (
    <S.FormPlacesWrapper className="input-wrapper">
      <PlacesAutocomplete
        value={inputValue}
        onSelect={(v) => handleSelect(v)}
        onChange={(v) => handleChange(v)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <S.FormPlacesInputWrapper>
              {/* @ts-ignore */}
              <S.FormPlacesInput
                {...getInputProps({
                  placeholder: placeholder,
                })}
              />
              {/* @ts-ignore */}
              {Icon ? <Icon className="icon" /> : null}
            </S.FormPlacesInputWrapper>
            <S.FormPlacesDropdown
              isVisible={suggestions.length === 0 ? true : false}
            >
              {loading && (
                <S.FormPlacesLoading>
                  <div title="Carregando..." className="loader"></div>
                </S.FormPlacesLoading>
              )}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item'

                return (
                  <S.FormPlacesOption
                    //@ts-ignore
                    key={suggestion.placeId}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </S.FormPlacesOption>
                )
              })}
            </S.FormPlacesDropdown>
          </>
        )}
      </PlacesAutocomplete>
    </S.FormPlacesWrapper>
  )
}

export default FormPlaces
