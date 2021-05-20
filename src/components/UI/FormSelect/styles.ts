import styled from 'styled-components'

export const FormSelectWrapper = styled.div`
  position: relative;
  width: 100%;

  .react-select {
    &__control {
      width: 100%;
      height: 35px;
      font-size: 12.5px;
      border: none;
      border-radius: 16px;
      box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.15);
      opacity: 0.84;
      transition: all 0.4s;
      padding-left: 9px;

      &:hover,
      &--menu-is-open {
        transform: scale(1.05);
        opacity: 0.94;
        box-shadow: 1px 1px 6px rgba(233, 199, 10, 0.4);
      }
    }

    &__value-container {
      flex-wrap: nowrap;
      overflow: hidden;
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
      font-size: 12px;
      text-align: center;
    }

    &__indicator {
      padding-left: 4px;

      svg {
        width: 15px;
      }
    }
  }
`
