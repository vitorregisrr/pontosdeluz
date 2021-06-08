import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fff;
  padding: var(--large) var(--medium);

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
  position: relative;
  height: 100vh;
  max-width: var(--container);
  margin: auto;

  .simplebar-offset {
    width: 100%;
  }

  .simplebar-track.simplebar-vertical {
    right: -66px;
    opacity: 0.6;

    &::before {
      width: 4px;
    }
  }
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
  }

  h4,
  h2 {
    font-size: 2.6rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  h5 {
    font-size: 2.4rem;
    margin-bottom: 30px;
    font-weight: 300;
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);
  margin-bottom: 10rem;

  img {
    width: 100%;
    border-radius: 40%;
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
`
