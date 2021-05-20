import { FormInput, FormSelect } from 'components/UI/'
import { Map } from '@styled-icons/entypo'
import { Sparkles } from '@styled-icons/ionicons-outline'

import * as S from './styles'

type MapHeaderProps = {
  zoomOutMap?: () => void
}

const MapHeader = ({ zoomOutMap = () => true }: MapHeaderProps) => {
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
        <FormInput
          Icon={Sparkles}
          placeholder="Pesquisar um ponto pelo nome..."
        />
        <FormInput Icon={Map} placeholder="Pesquisar um país, cidade, rua..." />
        <FormSelect
          placeholder="Filtrar por categorias..."
          options={[
            {
              label: 'Ecovilas e Permacultura',
              value: 'ecovilas',
              color: '#307012',
            },
            {
              label: 'Natureza e Lazer',
              value: 'naturezaelazer',
              color: '#94df62',
            },
            {
              label: 'Espiritualidade',
              value: 'espiritualidade',
              color: '#815dd6',
            },
            {
              label: 'Budismo',
              value: 'budismo',
              color: '#5c82d4',
            },
            {
              label: 'Xamanismo',
              value: 'xamanismo',
              color: '#533212',
            },
          ]}
        />
      </S.MapHeaderFilters>
    </S.MapHeaderWrapper>
  )
}

export default MapHeader
