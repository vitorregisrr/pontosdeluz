import styled from 'styled-components'

type ShareDropdownWrapperProps = {
  isActive: boolean
}

export const ShareDropdownWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  display: flex;
  background-color: rgba(250, 250, 250, 1);
  border-radius: 0 0 25px 25px;
  transform: translate(-50%, 100%);
  padding: 3px;
  pointer-events: none;
  opacity: 0;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  ${(props: ShareDropdownWrapperProps) =>
    props.isActive
      ? `
        opacity: 1;
        pointer-events: all;
        bottom: 2px;
      `
      : null}

  &::before {
    content: '';
    position: absolute;
    left: 40.4%;
    top: 1px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid rgba(250, 250, 250, 0.92);
    transform: translateY(-100%);

    @media screen and (min-width: 768px) {
      right: 19.2%;
    }
  }

  .react-share__ShareButton {
    margin-right: 4px;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.04);
    }
  }
`
