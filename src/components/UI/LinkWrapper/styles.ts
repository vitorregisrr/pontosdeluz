import styled from 'styled-components'

type WrapperProps = {
  position: string
}

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1400; // bigger than leaflet
  right: calc(var(--medium) - 18px);
  color: var(--white);
  cursor: pointer;
  opacity: 0.9;
  transform: scale(0.9);

  ${(props: WrapperProps) => {
    if (props.position === 'top') {
      return `top: calc(var(--medium) - 15px);`
    } else if (props.position === 'bottom') {
      return `bottom: calc(var(--medium) - 10px);`
    }
  }}

  @media screen and (min-width: 768px) {
    transform: scale(1);
    right: calc(var(--medium) - 7px);

    ${(props: WrapperProps) => {
      if (props.position === 'top') {
        return `top: calc(var(--medium));`
      } else if (props.position === 'bottom') {
        return `bottom: calc(var(--medium));`
      }
    }}
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
