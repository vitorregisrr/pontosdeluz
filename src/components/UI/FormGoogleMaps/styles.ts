import styled from 'styled-components'

export const FormPlacesWrapper = styled.div`
  position: relative;
`

export const FormPlacesInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-right: 15px;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.03);
  }

  .icon {
    position: absolute;
    top: 11px;
    width: 14px;
    right: 12px;
    color: rgba(6, 2, 43, 0.5);
  }
`

export const FormPlacesInput = styled.input`
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  width: 100%;
  height: 35px;
  padding-left: 20px;
  padding-right: 35px;
  border: none;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.15);
  opacity: 1;
  transition: all 0.3s;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    opacity: 0.84;
  }

  &:focus,
  &:active {
    color: rgba(0, 0, 0, 0.7);
    opacity: 0.94;
    outline: none;
  }
`

type FormPlacesDropdownProps = {
  isVisible: boolean
}

export const FormPlacesDropdown = styled.div`
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, 100%);
  padding: 5px 0;
  border-radius: 16px;
  background-color: rgba(250, 250, 250, 0.95);
  opacity: 1;
  overflow: hidden;
  width: 100%;
  transition: all 0.3s;

  ${({ isVisible }: FormPlacesDropdownProps) => `
    ${
      isVisible
        ? ' opacity: 0; pointer-events: none; transform: translate(-50%, 105%)'
        : ''
    }
  `};
`

export const FormPlacesOption = styled.div`
  font-size: 1.1rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  padding: 8px 10px;
  border-radius: 15px;
  transition: all 0.3s;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    background-color: #815dd6;
    color: #fff;
  }
`

export const FormPlacesLoading = styled.div`
  .loader {
    position: relative;
    color: #815dd6;
    font-size: 20px;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 22px auto;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  }
  @-webkit-keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @-webkit-keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
