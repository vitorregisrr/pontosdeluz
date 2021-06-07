import styled from 'styled-components'

type PlacePaneWrapperProps = {
  isVisible: boolean
}

export const PlacePaneWrapper = styled.div`
  position: absolute;
  top: 18.6%;
  right: 10px;
  z-index: 1400;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s;

  ${(props: PlacePaneWrapperProps) => `
      ${
        props.isVisible
          ? '.close-button{transform: translateY(50px)}; opacity: 1; pointer-events: all;'
          : ''
      }
  `}

  @media screen and (max-width: 768px) {
    transform: scale(0);

    ${(props: PlacePaneWrapperProps) => `
      ${props.isVisible ? 'transform: scale(1);' : ''}
  `}
  }

  @media screen and (min-width: 768px) {
    top: 17.6%;
    right: 40px;
    opacity: 0;
    transform: translateX(300px);

    ${(props: PlacePaneWrapperProps) => `
      ${props.isVisible ? 'transform: scale(1);' : ''}
  `}
  }
`

export const PlacePanePane = styled.div`
  position: relative;
  height: 70vh;
  width: 94vw;
  max-height: 580px;
  border-radius: 18px;
  background-color: #fff;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  opacity: 0.96;

  @media screen and (min-width: 768px) {
    opacity: 0.9;
    width: 390px;
    height: 70vh;
  }
`

export const PlacePaneImgWrapper = styled.div`
  position: relative;
  height: 30%;
  width: 100%;
  overflow: hidden;
  border-radius: 18px 18px 0 0;
`

export const PlacePaneImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PlacePaneBody = styled.div`
  position: relative;
  height: 60%;
  width: 100%;
  padding: 10px 35px 10px 18px;
  overflow: hidden;

  .simplebar-offset {
    width: 100%;
  }

  .simplebar-track.simplebar-vertical {
    right: -26px;
    opacity: 0.6;

    &::before {
      width: 4px;
    }
  }
`

export const PlacePaneTagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  span {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    margin-right: 3px;
    white-space: nowrap;
  }
`

type PlacePaneTagProps = {
  bgc: string
}

export const PlacePaneTag = styled.li`
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  border-radius: 10px;
  background-color: ${(props: PlacePaneTagProps) => props.bgc || '#627fcf'};
  padding: 3px 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:not(:first-child) {
    margin-left: 4px;
  }
`

export const PlacePaneTitle = styled.h2`
  font-size: 2em;
  margin: 2px 0 2px 0;
  color: rgba(0, 0, 0, 1);
`

export const PlacePaneDescription = styled.div`
  p {
    font-size: 1.3em;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
  }

  h4 {
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 7px;
  }

  ul {
    display: flex;
    font-size: 1.2rem;
    flex-wrap: wrap;
    list-style: none;

    li {
      margin-right: 10px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.6);

      a {
        font-size: inherit;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
        padding-right: 5px;
      }
    }
  }
`

export const PlacePaneFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 0.1;
  padding: 8px 15px 0 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const PlacePaneShareWrapper = styled.div``

export const PlacePaneShareButton = styled.button`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-weight: 500;
  text-transform: lowercase;
  cursor: pointer;
  transition: all 0.4s;

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:focus,
  &:active {
    outline: none;
  }

  svg {
    width: 23.4px;
    margin-right: 3px;
    margin-top: 2px;

    @media screen and (min-width: 768px) {
      width: 25px;
    }
  }
`
export const PlacePaneShareMenu = styled.div``

export const PlacePaneMoreLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2.9rem;
  font-size: 1.1rem;
  padding: 5px 15px;
  word-wrap: nowrap;
  cursor: pointer;
  background-color: var(--highlight);
  color: #0f0324;
  border-radius: 14px;
  font-weight: 500;
  transition: all 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 1.24rem;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 4px;
  }

  &:hover {
    background-color: #0f0324;
    color: #fff;
    transform: scale(1.05);
  }
`

export const PlacePaneCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 20px;
  z-index: -1;
  background-color: #fff;
  border: none;
  outline: none;
  padding: 4px 7px;
  transform: translateY(-100%);
  border-radius: 12px 12px 0 0;
  opacity: 0.9;
  cursor: pointer;
  transition: all 0.4s;

  &:focus {
    outline: none;
  }

  &:hover {
    padding-bottom: 10px;
    opacity: 1;
  }

  svg {
    width: 10px;
    color: #0f0324;
    transition: all 0.4s;
  }
`

type PlacePaneBackdropProps = {
  isVisible: boolean
}

export const PlacePaneBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0;
  pointer-events: none;
  z-index: 1300;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }

  ${(props: PlacePaneBackdropProps) =>
    props.isVisible
      ? `
        opacity: 0.4;
        pointer-events: all;
      `
      : null}
`
