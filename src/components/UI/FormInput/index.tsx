import { useState } from 'react'
import * as S from './styles'
import { StyledIcon } from 'styled-icons/types'

type FormInputProps = {
  placeholder?: string
  style?: string
  Icon?: StyledIcon
  onChange?: () => void
}

const FormInput = ({ placeholder, Icon }: FormInputProps) => {
  return (
    <S.FormInputWrapper className="input-wrapper">
      <S.FormInput placeholder={placeholder} />
      {/* @ts-ignore */}
      {Icon ? <Icon className="icon" /> : null}
    </S.FormInputWrapper>
  )
}

export default FormInput
