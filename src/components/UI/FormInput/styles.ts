import styled from 'styled-components'

export const FormInputWrapper = styled.div``

export const FormInput = styled.input`
  border: none;
  height: 35px;
  border-radius: 16px;
  width: 320px;
  box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.15);
  opacity: 0.84;
  transition: all 0.4s;
  padding-left: 22px;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }

  &:focus {
    box-shadow: 1px 1px 6px rgba(233, 199, 10, 0.5);
  }
`
