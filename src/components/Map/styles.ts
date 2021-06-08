import styled from 'styled-components'

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    background-color: black;
    z-index: 4;

    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      background-image: url('/img/star-bg2.gif');
      background-repeat: repeat;
      background-size: cover;
      background-blend-mode: lighten;
      opacity: 0.24;
      pointer-events: none;
    }
  }

  .leaflet-tile-pane {
    opacity: 0.6;
  }

  .leaflet-marker-pane {
    animation: float 6s infinite;

    &.js-hovered {
      animation: none !important;
    }
  }

  .leaflet-marker-icon {
    position: absolute;
    background: none;
    border: none;
    background-image: url('/img/light-orb.png');
    background-position: center center;
    background-size: contain;
    width: 50px !important;
    height: 50px !important;
    transition: all 0.3s, transform 0.1s;
    animation: fadeIn 0.5s;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

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

  .leaflet-popup {
    position: relative;
    white-space: pre-wrap;
    width: 115px;
    padding: 0;
    border-radius: 10px;
    box-shadow: none;
    border: 0px;

    .leaflet-popup-close-button {
      display: none;
    }

    &-content {
      width: 100%;
      margin: 0 !important;

      &-wrapper {
        padding: 0;
        opacity: 0.87;
      }
    }

    .leaflet-popup-tip {
      opacity: 0.87;
    }

    img {
      width: 100%;
      height: 44.5px;
      margin: 0;
      padding: 0;
      border-radius: 10px 10px 0 0;
      object-fit: cover;
    }

    .body {
      width: 100%;
      padding: 3px 4px 9px 10px;

      .name {
        display: block;
        font-size: 1.2rem;
        line-height: 1.3;
        margin-bottom: 0;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.9);
      }

      .resume {
        font-weight: 400;
        font-size: 0.9rem;
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.2;
        margin-top: 4px;
        margin-bottom: 4px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .span {
        font-size: 0.85rem;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);

        svg {
          width: 7px;
          margin-left: 1px;
          margin-bottom: 0px;
        }
      }
    }
  }

  .leaflet-tooltip-pane {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }

    .leaflet-tooltip {
      position: relative;
      white-space: pre-wrap;
      width: 115px;
      padding: 0;
      background-color: rgba(250, 250, 250, 0.8);
      border-radius: 10px;
      box-shadow: none;
      border: 0px;
      transition: opacity 0.4s, transform 0.1s;

      &.hide {
        display: none !important;
      }

      &::before {
        opacity: 0.8;
        top: 75%;
      }

      img {
        width: 100%;
        height: 44.5px;
        margin: 0;
        padding: 0;
        border-radius: 10px 10px 0 0;
        object-fit: cover;
      }

      .body {
        padding: 3px 4px 9px 10px;

        .name {
          display: block;
          font-size: 1.2rem;
          line-height: 1.3;
          margin-bottom: 0;
          font-weight: bold;
          color: rgba(0, 0, 0, 0.9);
        }

        .resume {
          font-weight: 400;
          font-size: 0.9rem;
          color: rgba(0, 0, 0, 0.4);
          line-height: 1.2;
          margin-top: 4px;
          height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .span {
          font-size: 0.85rem;
          color: rgba(0, 0, 0, 0.5);

          svg {
            width: 7px;
            margin-left: 1px;
            margin-bottom: 0px;
          }
        }
      }
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

  &.isPlacePaneOpen {
    //...
  }
`
