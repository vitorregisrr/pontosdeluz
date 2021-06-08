import styled from 'styled-components'

export const ButtonLabel = styled.div`
  position: absolute;
  left: -4px;
  top: -2px;
  width: 20px;
  height: 36px;
  border-radius: 15px;
  padding-left: 44px;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: -1;
  transition: all 0.3s;
  opacity: 0;

  span {
    font-size: 1.1rem;
    white-space: nowrap;
    color: #0f0324;
    opacity: 0;
    transition: 0.2s;
    transition-delay: none;
  }
`

export const LocationButton = styled.button`
  position: fixed;
  z-index: 1400; // bigger than leaflet
  left: calc(var(--medium) - 20px);
  top: 228px;
  color: var(--white);
  border: none;
  background: none;
  opacity: 0.9;
  transform: scale(0.9);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    transform: scale(1);
    top: 178px;
    left: calc(var(--medium) - 12px);
  }

  svg {
    z-index: 10;
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: #0f0324;
    }

    ${ButtonLabel} {
      border-radius: 20px;
      width: 157px;
      opacity: 1;

      span {
        opacity: 1;
        transition: 0.4s;
        transition-delay: 0s;
      }
    }
  }
`
