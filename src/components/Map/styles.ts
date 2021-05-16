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
      opacity: 0.25;
    }
  }

  .leaflet-tile-pane {
    opacity: 0.6;
  }

  .leaflet-marker-pane {
    animation: float 6s infinite;
  }

  .leaflet-marker-icon {
    position: relative;
    background: none;
    border: none;
    background-image: url('/img/light-orb.png');
    background-position: center center;
    background-size: contain;
    width: 50px !important;
    height: 50px !important;
    transition: all 0.3s ease-in-out, transform 0.1s;

    &:hover {
      width: 59px !important;
      height: 59px !important;
      margin-top: -29px !important;
      margin-left: -29px !important;
    }

    .marker-name {
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: var(--highligh);
    }
  }

  .leaflet-control-container {
    .leaflet-top {
      top: 53px;
      left: -5px;
      opacity: 0.85;
      transition: opacity 0.2s ease-in;
      padding-left: 3px;

      @media screen and (min-width: 768px) {
        top: 65px;
        left: 0;
      }

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

    .leaflet-bar.leaflet-control {
      transform: scale(0.9);

      @media screen and (min-width: 768px) {
        transform: scale(0.98);
      }
    }
  }

  &.upperMarkers {
    .leaflet-marker-icon {
      width: 110px !important;
      height: 110px !important;
      margin-top: -55px !important;
      margin-left: -55px !important;

      &:hover {
        width: 120px !important;
        height: 120px !important;
        margin-top: -60px !important;
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
  padding-left: 1.2rem;
  z-index: 1222;

  @media screen and (min-width: 768px) {
    padding-left: 1.54rem;
  }
`

export const MapHeaderBrand = styled.img`
  height: 3rem;
  opacity: 0.9;
  transition: opacity 0.2s ease-in;

  @media screen and (min-width: 768px) {
    height: 3.6rem;
  }

  &:hover {
    opacity: 1;
  }
`

export const MapHeaderBrandWrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`
export const MapHeaderFilters = styled.form`
  display: flex;
  align-items: center;
  padding-left: 20px;

  input {
    margin-right: 15px;
  }
`
