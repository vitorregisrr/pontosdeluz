import styled from 'styled-components'

export const FormInputWrapper = styled.div`
  position: relative;
  width: 100%;
  transition: all 0.4s;

  .icon {
    position: absolute;
    top: 11px;
    width: 14px;
    right: 12px;
    color: rgba(6, 2, 43, 0.5);
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const FormInput = styled.input`
  font-size: 13px;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 16px;
  box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.15);
  opacity: 0.84;
  transition: all 0.4s;
  padding-left: 20px;

  &:hover {
    opacity: 1;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: 1px 1px 6px rgba(233, 199, 10, 0.4);
  }
`
