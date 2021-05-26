import { createGlobalStyle } from 'styled-components'
import 'leaflet-loading/src/Control.Loading.css'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #f5e042;
    --background: #030518;
    --white: #eeeeee;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 2.5rem;
    --large: 5rem;

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: var(--background);
    color: var(--white);
  }
  body {
  }
  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
  }
  a {
    color: var(--highlight);
  }

  
@keyframes float {
	0% {
		transform: translatey(0px);
	}

	50% {
		transform: translatey(-10px);
	}

	100% {
		transform: translatey(0px);
	}
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


`

export default GlobalStyles
