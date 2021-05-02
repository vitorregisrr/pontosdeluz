import styled from 'styled-components'

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    background-color: #030518;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #030518;
      background-image: url('/img/star-bg2.gif');
      background-repeat: repeat;
      background-size: cover;
      background-blend-mode: lighten;
      opacity: 0.15;
    }
  }

  .leaflet-tile-pane {
    opacity: 0.6;
  }

  .leaflet-marker-pane {
    animation: float 6s infinite;
  }

  .leaflet-marker-icon {
    background: none;
    border: none;
    background-image: url('/img/light-orb.png');
    background-position: center center;
    background-size: contain;
    width: 60px !important;
    height: 60px !important;
    transition: all 0.3s ease-in-out, transform 0.1s;

    &:hover {
      width: 74px !important;
      height: 74px !important;
      margin-top: -32px !important;
      margin-left: -32px !important;
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

  &.upperMarkers {
    .leaflet-marker-icon {
      width: 120px !important;
      height: 120px !important;
      margin-top: -70px !important;
      margin-left: -60px !important;

      &:hover {
        width: 130px !important;
        height: 130px !important;
        margin-top: -70px !important;
        margin-left: -60px !important;
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
  height: 3.6rem;
  opacity: 0.9;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 1;
  }
`
