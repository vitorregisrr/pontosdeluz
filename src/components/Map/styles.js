import styled from 'styled-components'

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    background-color: #75cff0;
    background-image: url('/img/star-bg.png');
    background-repeat: repeat;
  }

  .leaflet-tile-pane {
    opacity: 0.7;
  }

  .leaflet-marker-pane {
    animation: float 6s;
  }

  .leaflet-marker-icon {
    background: none;
    border: none;
    background-image: url('/img/light-orb.png');
    background-position: center center;
    background-size: 50px 50px;
    transition: background-size 0.4s ease-in-out, transform 0.2s;

    &:hover {
      background-size: 60px 60px;
    }
  }
`
