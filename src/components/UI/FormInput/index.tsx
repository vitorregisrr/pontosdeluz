import * as S from './styles'

type FormInputProps = {
  placeholder?: string
  style?: string
  onChange?: () => void
}

const FormInput = ({ placeholder }: FormInputProps) => {
  return (
    <S.FormInputWrapper>
      <S.FormInput placeholder={placeholder} />
    </S.FormInputWrapper>
  )
}

export default FormInput
