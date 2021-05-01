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
`
