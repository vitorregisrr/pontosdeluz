import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1400; // bigger than leaflet
  top: calc(var(--medium) - 10px);
  right: calc(var(--medium) - 10px);
  color: var(--white);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    transform: scale(1);
    top: calc(var(--medium) - 10px);
    right: calc(var(--medium) + 30px);
  }
`

type ProfileButtonProps = {
  onClick: () => void
  isActive: boolean
}

export const ProfileButton = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: 3.4px solid #fff;
  border-radius: 50%;
  opacity: 0.9;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s;

  ${(props: ProfileButtonProps) =>
    props.isActive
      ? `
        border-color: var(--highlight);
        opacity: 1;
        transform: scale(1.06);
      `
      : null}

  &:hover {
    border-color: var(--highlight);
    opacity: 1;
    transform: scale(1.06);
  }
`

export const ImageIcon = styled.img`
  width: 104%;
  height: 104%;
  object-fit: cover;
  object-position: center center;
`

type DropdownProps = {
  isVisible: boolean
}

export const Dropdown = styled.div`
  position: absolute;
  bottom: -16px;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 250, 250, 0.92);
  border-radius: 14px;
  transform: translate(-44.5%, 100%);
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s;

  ${(props: DropdownProps) =>
    props.isVisible
      ? `
    opacity: 1;
    pointer-events: all;
  `
      : null}

  &::before {
    content: '';
    position: absolute;
    right: 36.8%;
    top: 0;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid rgba(250, 250, 250, 0.92);
    transform: translateY(-100%);
  }

  hr {
  }
`
export const DropdownList = styled.ul`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 5px 0;
  overflow: hidden;
`

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  padding: 8px 14px;
  transition: all 0.4s;

  &:hover {
    background-color: var(--highlight);
  }

  span {
    line-height: 1.1;
    white-space: nowrap;
  }

  svg {
    width: 15px;
    margin-right: 5px;
  }
`

type BackdropProps = {
  onClick: () => void
  isVisible: boolean
}
export const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 1300;
  pointer-events: none;
  transition: all 0.3s;
  opacity: 0;
  cursor: pointer;

  ${(props: BackdropProps) =>
    props.isVisible
      ? `
      opacity: 0.5;
      pointer-events: all;`
      : null}
`
