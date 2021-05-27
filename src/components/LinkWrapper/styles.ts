import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1400; // bigger than leaflet
  top: calc(var(--medium) - 10px);
  right: calc(var(--medium) - 10px);
  color: var(--white);
  cursor: pointer;
  opacity: 0.9;
  transform: scale(0.9);

  @media screen and (min-width: 768px) {
    transform: scale(1);
    top: calc(var(--medium));
    right: calc(var(--medium) - 4px);
  }

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
