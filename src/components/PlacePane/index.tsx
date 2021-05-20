import * as S from './styles'

type PlaceInfoProps = {
  isVisible: boolean
  data: { id: string; name: string }
}

const PlaceInfo = ({ isVisible = false, data }: PlaceInfoProps) => {
  return (
    <S.PlaceInfoWrapper>
      <S.PlaceInfoPane></S.PlaceInfoPane>
    </S.PlaceInfoWrapper>
  )
}

export default PlaceInfo
