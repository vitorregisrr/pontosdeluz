import { FormInputSearch, FormSelect, FormGoogleMaps } from 'components/UI/'
import { Map } from '@styled-icons/entypo'
import { Sparkles } from '@styled-icons/ionicons-outline'

import * as S from './styles'

type MapHeaderProps = {
  zoomOutMap: () => void
  setMapPosition: () => void
  openPlace: () => void
  placesOptions: { value: string; label: string }[]
  categoriesOptions: { value: string; label: string; color: string }[]
}

const MapHeader = ({
  zoomOutMap,
  setMapPosition,
  openPlace,
  placesOptions,
  categoriesOptions,
}: MapHeaderProps) => {
  return (
    <S.MapHeaderWrapper>
      <S.MapHeaderBrandWrapper
        onClick={() => {
          zoomOutMap()
        }}
      >
        <S.MapHeaderBrand src={'/img/brand.png'} />
      </S.MapHeaderBrandWrapper>

      <S.MapHeaderFilters>
        <FormInputSearch
          Icon={Sparkles}
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
          options={[
            {
              label: 'Ecovilas e Permacultura',
              value: 'ecovilas',
              color: '#307012',
            },
            {
              label: 'Natureza',
              value: 'naturezaelazer',
              color: '#b96a52',
            },
            {
              label: 'Terapias Holísticas',
              value: 'terapiasholisticas',
              color: '#815dd6',
            },
            {
              label: 'Budismo',
              value: 'budismo',
              color: '#d49c5c',
            },
            {
              label: 'Yoga',
              value: 'yoga',
              color: '#b85cb3',
            },
            {
              label: 'Xamanismo',
              value: 'xamanismo',
              color: '#533212',
            },
            {
              label: 'Templos Espirituais',
              value: 'templosespirituais',
              color: '#627fcf',
            },
          ].sort((a, b) => (a.label > b.label ? 1 : -1))}
        />
      </S.MapHeaderFilters>
    </S.MapHeaderWrapper>
  )
}

export default MapHeader
