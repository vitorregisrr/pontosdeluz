import styled from 'styled-components'

export const UserMenuWrapper = styled.div`
  position: fixed;
  z-index: 1400; // bigger than leaflet
  display: flex;
  align-items: center;
  top: calc(var(--medium) - 12px);
  right: calc(var(--medium) - 14px);

  @media screen and (min-width: 768px) {
    transform: scale(1);
    top: calc(var(--medium) - 10px);
    right: calc(var(--medium) - 9px);
  }
`

export const UserMenuBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.4;
  z-index: 1300;
  cursor: pointer;
`
