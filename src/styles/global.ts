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
  transition: all 200ms;
}
.CSSTransition-fade-exit {
  opacity: 1;
}
.CSSTransition-fade-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

/* backdrop */
.CSSTransition-backdropp-enter {
  opacity: 0;
}
.CSSTransition-backdropp-enter-active {
  opacity: .4;
  transition: opacity 200ms;
}
.CSSTransition-backdropp-exit {
  opacity: .4;
}
.CSSTransition-backdropp-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

/* placepane */
@media screen and (max-width: 768px){
  .CSSTransition-placepane-enter {
    transform: scale(0);
    opacity: 0;
  }
  .CSSTransition-placepane-enter-active {
    opacity: 1;
    transform:  scale(1);
    transition: transform 400ms, opacity 400ms;
  }
  .CSSTransition-placepane-exit {
    opacity: 1;
    transform: scale(1);
  }
  .CSSTransition-placepane-exit-active {
    opacity: 0;
    transform:  scale(0);
    transition:  transform 400ms, opacity 400ms;
  }
}

@media screen and (min-width: 768px){
  .CSSTransition-placepane-enter {
    transform: translateX(300px);
    opacity: 0;
  }
  .CSSTransition-placepane-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: transform 400ms, opacity 400ms;
  }
  .CSSTransition-placepane-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .CSSTransition-placepane-exit-active {
    opacity: 0;
    transform: translateX(300px);
    transition:  transform 400ms, opacity 400ms;
  }
}
`

export default GlobalStyles
