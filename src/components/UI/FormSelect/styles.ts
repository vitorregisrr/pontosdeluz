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
      animation: fadeIn 0.4s ease-in-out;
    }

    &__option {
      font-size: 1.1rem;
      padding: 8px 10px;
      text-align: center;
      border-radius: 16px;
      opacity: 0.94;
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
