import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 1.4rem;
`

type NotifyButtonProps = {
  onClick: () => void
  isActive: boolean
}

export const NotifyButton = styled.button`
  position: relative;
  width: 36px;
  height: 36px;
  background: none;
  color: #fff;
  border: none;
  border-radius: 50%;
  opacity: 0.9;
  cursor: pointer;
  transition: all 0.4s;

  ${(props: NotifyButtonProps) =>
    props.isActive
      ? `
        color: var(--highlight);
        opacity: .9;
        transform: scale(1.06);

        .number{
          background-color: #fff !important;
        }
      `
      : null}

  &:hover {
    color: var(--highlight);
    opacity: 0.9;
    transform: scale(1.06);

    .number {
      background-color: #fff !important;
    }
  }

  /* Pulse Effect */
  &::before {
    content: '';
    position: absolute;
    top: 24%;
    left: 26%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    animation: pulse-yellow 2s infinite;
    z-index: -1;

    @keyframes pulse-yellow {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 20px rgba(255, 177, 66, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0);
      }
    }
  }

  .number {
    position: absolute;
    bottom: 12px;
    right: 2px;
    font-size: 0.74rem;
    padding-top: 1.2px;
    padding-left: 1px;
    background-color: var(--highlight);
    color: var(--background);
    font-weight: 500;
    border-radius: 50%;
    width: 12.4px;
    height: 12.4px;
    transition: all 0.3s;
    box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`

type NotifyDropdownProps = {
  isVisible: boolean
}

export const NotifyDropdown = styled.div`
  position: absolute;
  bottom: -18px;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 250, 250, 0.92);
  border-radius: 14px;
  transform: translate(-75.5%, 100%);
  pointer-events: none;
  width: 340px;
  opacity: 0;
  transition: all 0.3s;

  ${(props: NotifyDropdownProps) =>
    props.isVisible
      ? `
    opacity: 1;
    pointer-events: all;
  `
      : null}

  &::before {
    content: '';
    position: absolute;
    right: 17.4%;
    top: 1px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid rgba(250, 250, 250, 0.92);
    transform: translateY(-100%);
  }

  hr {
    background-color: rgba(0, 0, 0, 0.18);
    height: 1px;
    border: none;
  }
`
export const NotifyDropdownList = styled.ul`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 5px 0;
  overflow: hidden;
`

export const NotifyDropdownItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  padding: 10px 14px;
  transition: all 0.4s;

  &:hover {
    background-color: var(--highlight);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }

  span {
    line-height: 1.1;
    white-space: nowrap;
  }

  svg {
    width: 15px;
    margin-right: 5px;
  }

  .icon-wrapper {
    svg {
      width: 20px;
      margin-left: 4px;
    }
  }

  .body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 15px;

    .title {
      font-size: 1.4rem;
      margin-bottom: 5px;
      font-weight: 600;
    }

    .desc {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`
