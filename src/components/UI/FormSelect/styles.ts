import styled from 'styled-components'

export const FormSelectWrapper = styled.div`
  .react-select {
    &__control {
      border: none;
      min-height: 35px;
      border-radius: 16px;
      width: 200px;
      box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.15);
      opacity: 0.84;
      transition: all 0.4s;
      padding-left: 12px;

      &:hover {
        transform: scale(1.05);
        opacity: 0.94;
      }
    }

    &__menu {
      opacity: 0.94;
      border-radius: 16px;
      overflow: hidden;
    }

    &__option {
      opacity: 0.94;
      border-radius: 16px;
      cursor: pointer;
    }

    &__indicator {
      padding-left: 4px;

      svg {
        width: 15px;
      }
    }
  }
`
