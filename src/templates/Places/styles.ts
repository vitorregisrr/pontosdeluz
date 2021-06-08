import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding-top: 2rem;
  height: 100vh;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding-top: 4rem;
  }

  .simplebar-offset {
    width: 100%;
  }

  .simplebar-track.simplebar-vertical {
    right: 1vw;
    opacity: 0.6;

    @media screen and (min-width: 768px) {
      right: 5vw;
    }

    &::before {
      width: 4px;
    }
  }

  * {
    color: var(--dark);
  }

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

export const Container = styled.section`
  max-width: var(--container);
  padding: 0 20px;
  margin: auto;
`

export const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  span {
    font-size: 1.2rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    margin-right: 3px;
    white-space: nowrap;
  }
`

type TagProps = {
  bgc: string
}

export const Tag = styled.li`
  font-size: 1.2rem;
  letter-spacing: 0.3px;
  border-radius: 18px;
  background-color: ${(props: TagProps) => props.bgc || '#627fcf'};
  padding: 3px 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:not(:first-child) {
    margin-left: 4px;
  }
`

export const Heading = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  max-width: 80rem;
  color: #020726;
`

export const Body = styled.div`
  margin-bottom: var(--large);

  * {
    color: #020726;
  }

  p {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: var(--medium);
    max-width: 80rem;
  }

  h5,
  h4,
  h2 {
    font-size: 2.2rem;
    margin-top: 2.4rem;
    color: rgba(0, 0, 0, 1);
    font-weight: 600;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    li {
      font-size: 1.7rem;
      font-weight: 400;
      opacity: 0.8;
      margin-right: 20px;
      white-space: nowrap;
    }
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);
  margin-bottom: 3rem;

  img {
    width: 100%;
    border-radius: 2%;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }

  .disqus-thread {
    margin-bottom: 14rem;
  }
`
