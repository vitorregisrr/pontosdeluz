import styled from 'styled-components'

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;

  @media screen and (max-width: 768px) {
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  }

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    a {
      color: var(--primary) !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: var(--dark);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.375rem;
  }
`
