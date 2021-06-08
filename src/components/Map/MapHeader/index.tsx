import { useState } from 'react'
import { FormInputSearch, FormSelect, FormGoogleMaps } from 'components/UI/'
import { Map } from '@styled-icons/entypo'
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
  // Mobile visibility
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
          /* @ts-ignore */
          sendValueHandler={(slug: string) => openPlace(slug)}
          options={placesOptions}
          placeholder="Pesquisar um ponto pelo nome..."
        />
        <FormGoogleMaps
          // @ts-ignore
          onChange={(adress) => setMapPosition(adress)}
          Icon={Map}
          placeholder="Pesquisar um país, cidade, rua..."
        />
        <FormSelect
          placeholder="Filtrar por categorias..."
          // @ts-ignore
          sendValueHandler={(values) => updatePlacesByTag(values)}
          // @ts-ignore
          options={categoriesOptions.sort((a, b) =>
            a.label > b.label ? 1 : -1
          )}
        />
      </S.MapHeaderFilters>
    </S.MapHeaderWrapper>
  )
}

export default MapHeader
