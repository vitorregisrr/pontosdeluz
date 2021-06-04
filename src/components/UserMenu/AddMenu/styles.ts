import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 0.3rem;
`

type AddMenuButtonProps = {
  onClick: () => void
  isActive: boolean
}

export const AddMenuButton = styled.button`
  position: relative;
  width: 53px;
  height: 53px;
  background: none;
  color: #fff;
  border: none;
  border-radius: 50%;
  opacity: 0.9;
  cursor: pointer;
  transition: all 0.4s;

  ${(props: AddMenuButtonProps) =>
    props.isActive
      ? `
      color: var(--highlight);
        opacity: .8;
        transform: scale(1.06);

        .number{
          opacity: 0;
        }
      `
      : null}

  &:hover {
    color: var(--highlight);
    opacity: 1;
    transform: scale(1.06);

    .number {
      opacity: 0;
    }
  }
`

type AddMenuDropdownProps = {
  isVisible: boolean
}

export const AddMenuDropdown = styled.div`
  position: absolute;
  bottom: -7.6px;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 250, 250, 0.92);
  border-radius: 14px;
  transform: translate(-68.5%, 100%);
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s;

  ${(props: AddMenuDropdownProps) =>
    props.isVisible
      ? `
      opacity: 1;
      pointer-events: all;
    `
      : null}

  &::before {
    content: '';
    position: absolute;
    right: 19.2%;
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
export const AddMenuDropdownList = styled.ul`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 5px 0;
  overflow: hidden;
`

export const AddMenuDropdownItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
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
    width: 17px;
    margin-right: 5px;
  }

  .sub-icon {
    opacity: 0.3;
  }

  .plus-icon {
    position: absolute;
    width: 15px;
    transform: translate(4px, 6px);
  }
`
