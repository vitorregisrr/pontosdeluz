import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  color: var(--highlight);
  font-size: 60px;
  font-family: 'Brush Script MT', cursive;
`

export const Description = styled.h2`
  color: #fff;
`

export const Ilustration = styled.img`
  margin-top: 15px;
  width: min(55rem, 100%);
`
