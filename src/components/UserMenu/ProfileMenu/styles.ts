import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`

type ProfileButtonProps = {
  onClick: () => void
  isActive: boolean
}

export const ProfileButton = styled.button`
  width: 49px;
  height: 49px;
  background: none;
  border: 3.4px solid #fff;
  border-radius: 50%;
  opacity: 0.9;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s;

  @media screen and (min-width: 768px) {
    width: 55px;
    height: 55px;
  }

  ${(props: ProfileButtonProps) =>
    props.isActive
      ? `
        border-color: var(--highlight);
        opacity: 1;
        transform: scale(1.06);
      `
      : null}

  &:hover {
    border-color: var(--highlight);
    opacity: 1;
    transform: scale(1.06);
  }
`

export const ImageIcon = styled.img`
  width: 104%;
  height: 104%;
  object-fit: cover;
  object-position: center center;
`

type ProfileDropdownProps = {
  isActive: boolean
}

export const ProfileDropdown = styled.div`
  position: absolute;
  bottom: -12px;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 250, 250, 0.92);
  border-radius: 14px;
  transform: translate(-68.5%, 100%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;

  ${(props: ProfileDropdownProps) =>
    props.isActive
      ? `
        opacity: 1;
        pointer-events: all;
      `
      : null}

  &::before {
    content: '';
    position: absolute;
    right: 12.8%;
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
export const ProfileDropdownList = styled.ul`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 5px 0;
  overflow: hidden;
`

export const ProfileDropdownItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.24rem;
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

  .sub-icon {
    opacity: 0.3;
  }

  .plus-icon {
    position: absolute;
    width: 15px;
    transform: translate(4px, 6px);
  }
`
