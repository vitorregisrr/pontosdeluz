import styled from 'styled-components'

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    background-color: #75cff0;
    background-image: url('/img/star-bg.gif');
    background-repeat: repeat;
    background-blend-mode: multiply;
  }

  .leaflet-tile-pane {
    opacity: 0.75;
  }

  .leaflet-marker-pane {
    animation: float 6s;
  }

  .leaflet-marker-icon {
    background: none;
    border: none;
    background-image: url('/img/light-orb.png');
    background-position: center center;
    background-size: 60px 60px;
    transition: background-size 0.3s ease-in-out, transform 0.1s;

    &:hover {
      background-size: 70px 70px;
    }
  }

  .leaflet-control-container {
    .leaflet-top {
      top: 65px;
      opacity: 0.85;
      transition: opacity 0.2s ease-in;
      padding-left: 3px;

      &:hover {
        opacity: 1;
      }
    }

    .leaflet-bar {
      border: none;
      font-family: 'Arial', sans-serif;
      font-weight: lighter;

      a {
        height: 32px;
        line-height: 32px;
      }
    }
  }
`

export const MapHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding-top: 1.9rem;
  padding-left: 14px;
  z-index: 1222;
`

export const MapHeaderBrand = styled.img`
  height: 3.8rem;
  opacity: 0.8;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 1;
  }
`
