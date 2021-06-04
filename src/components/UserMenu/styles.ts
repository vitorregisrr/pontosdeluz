import styled from 'styled-components'

export const UserMenuWrapper = styled.div`
  position: fixed;
  z-index: 1400; // bigger than leaflet
  display: flex;
  align-items: center;
  top: calc(var(--medium) - 10px);
  right: calc(var(--medium) - 10px);

  @media screen and (min-width: 768px) {
    transform: scale(1);
    top: calc(var(--medium) - 10px);
    right: calc(var(--medium) - 9px);
  }
`

type BackdropProps = {
  onClick: () => void
  isVisible: boolean
}
export const UserMenuBackdrop = styled.div`
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
