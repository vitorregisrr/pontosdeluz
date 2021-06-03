import styled from 'styled-components'

type WrapperProps = {
  position: string
}

export const LinkLabel = styled.div`
  position: absolute;
  right: -4px;
  top: -2px;
  width: 20px;
  height: 36px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: -1;
  transition: all 0.3s;
  opacity: 0;

  span {
    white-space: nowrap;
    color: #0f0324;
    opacity: 0;
    transition: 0.2s;
    transition-delay: none;
  }
`

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1400; // bigger than leaflet
  right: calc(var(--medium) - 10px);
  color: var(--white);
  cursor: pointer;
  opacity: 0.9;
  transform: scale(0.9);

  ${(props: WrapperProps) => {
    if (props.position === 'top') {
      return `top: calc(var(--medium) - 10px);`
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
    z-index: 10;
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: #0f0324;
    }

    ${LinkLabel} {
      border-radius: 20px;
      width: 140px;
      padding-left: 14px;
      opacity: 0.9;

      span {
        opacity: 1;
        transition: 0.4s;
        transition-delay: 0s;
      }
    }
  }
`
