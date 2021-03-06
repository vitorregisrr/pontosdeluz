import { useState } from 'react'
import { FormInputSearch, FormSelect, FormGoogleMaps } from 'components/UI/'
import { Map } from '@styled-icons/entypo'
import LocationButton from './LocationButton'
import { Sparkles as SparklesIcon } from '@styled-icons/ionicons-outline'
import { FilterAlt as FilterIcon } from '@styled-icons/boxicons-regular'
import { Times as TimesIcon } from '@styled-icons/fa-solid'

import * as S from './styles'

type MapHeaderProps = {
  zoomOutMap: () => void
  setMapPosition: () => void
  openPlace: () => void
  placesOptions: { value: string; label: string }[]
  categoriesOptions: { value: string; label: string; color: string }[]
  updatePlacesByTag: () => void
}

const MapHeader = ({
  zoomOutMap,
  setMapPosition,
  openPlace,
  placesOptions,
  categoriesOptions,
  updatePlacesByTag,
}: MapHeaderProps) => {
  // State -> mobile visibility
  const [isActive, setIsActive] = useState(false)

  const onToggleButtonClickHandler = () => {
    setIsActive((old) => !old)
  }

  return (
    <S.MapHeaderWrapper>
      <S.MapHeaderBrandWrapper
        onClick={() => {
          zoomOutMap()
        }}
      >
        <S.MapHeaderBrand src={'/img/brand.png'} />
      </S.MapHeaderBrandWrapper>

      <LocationButton setMapPosition={setMapPosition} />

      <S.MapHeaderFilters isActive={isActive}>
        <S.MapHeaderFilterToggler
          type="button"
          onClick={() => onToggleButtonClickHandler()}
          isActive={isActive}
        >
          {isActive ? <TimesIcon className="times-icon" /> : <FilterIcon />}
        </S.MapHeaderFilterToggler>

        <FormInputSearch
          Icon={SparklesIcon}
          sendValueHandler={openPlace}
          options={placesOptions}
          placeholder="Pesquisar um ponto pelo nome..."
        />
        <FormGoogleMaps
          onChange={setMapPosition}
          Icon={Map}
          placeholder="Pesquisar um país, cidade, rua..."
        />
        <FormSelect
          placeholder="Filtrar por categorias..."
          sendValueHandler={updatePlacesByTag}
          options={categoriesOptions.sort((a, b) =>
            a.label > b.label ? 1 : -1
          )}
        />
      </S.MapHeaderFilters>
    </S.MapHeaderWrapper>
  )
}

export default MapHeader
