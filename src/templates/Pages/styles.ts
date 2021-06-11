import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;

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
    opacity: 0.02;
    pointer-events: none;
  }
`

export const Container = styled.div`
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.9rem;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 6.4rem;
  }
`

export const Body = styled.div`
  * {
    color: black;
  }
  // serve para estilos do body
  // p, a, ul, li, blockquote
  p {
    font-size: 1.6em;
    line-height: 1.5;
    font-weight: 400;
    padding: 0 20px;

    @media screen and (min-width: 768px) {
      font-size: 1.9rem;
      padding: 0;
    }
  }

  h4 {
    font-size: 2.4rem;
    margin: 5rem 0 1.6rem 0;
  }
  ul {
    list-style: none;
    font-size: 1.5rem;
  }
`
