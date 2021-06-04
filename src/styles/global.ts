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
    height: 100vh;
    width: 100vw;
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

  
  /* Animations */
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

/* CSSTransitions */

/* fade */
.CSSTransition-fade-enter {
  opacity: 0;
}
.CSSTransition-fade-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.CSSTransition-fade-exit {
  opacity: 1;
}
.CSSTransition-fade-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

/* backdrop */
.CSSTransition-backdrop-enter {
  opacity: 0;
}
.CSSTransition-backdrop-enter-active {
  opacity: .4;
  transition: opacity 200ms;
}
.CSSTransition-backdrop-exit {
  opacity: .4;
}
.CSSTransition-backdrop-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

/* fadeRight */
.CSSTransition-fadeRight-enter {
  transform: translateX(300px);
  opacity: 0;
}
.CSSTransition-fadeRight-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: transform 400ms, opacity 400ms;
}
.CSSTransition-fadeRight-exit {
  opacity: 1;
  transform: translateX(0);
}
.CSSTransition-fadeRight-exit-active {
  opacity: 0;
  transform: translateX(300px);
  transition: transform 400ms, opacity 400ms;
}
`

export default GlobalStyles
