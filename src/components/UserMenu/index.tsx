import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import * as S from './styles'
import ProfileMenu from './ProfileMenu'
import NotifyMenu from './NotifyMenu'
import AddMenu from './AddMenu'

const UserMenu = () => {
  const [isProfileMenuActive, setIsProfileMenuActive] = useState(false)
  const [isNotifyMenuActive, setIsNotifyMenuActive] = useState(false)
  const [isAddMenuActive, setIsAddMenuActive] = useState(false)

  const closeAll = function () {
    setIsProfileMenuActive(false)
    setIsNotifyMenuActive(false)
    setIsAddMenuActive(false)
  }

  const onBackdropClickHandler = () => {
    closeAll()
  }

  const onProfileMenuClickHandler = () => {
    closeAll()
    setIsProfileMenuActive((old) => !old)
  }

  const onNotifyMenuClickHandler = () => {
    closeAll()
    setIsNotifyMenuActive((old) => !old)
  }

  const onAddMenuClickHandler = () => {
    closeAll()
    setIsAddMenuActive((old) => !old)
  }

  return (
    <>
      <S.UserMenuWrapper>
        <AddMenu
          isActive={isAddMenuActive}
          toggleActive={onAddMenuClickHandler}
        />
        <NotifyMenu
          isActive={isNotifyMenuActive}
          toggleActive={onNotifyMenuClickHandler}
        />
        <ProfileMenu
          isActive={isProfileMenuActive}
          toggleActive={onProfileMenuClickHandler}
        />
      </S.UserMenuWrapper>
      <CSSTransition
        in={isProfileMenuActive || isNotifyMenuActive || isAddMenuActive}
        timeout={300}
        classNames="CSSTransition-backdropp"
        unmountOnExit
      >
        <S.UserMenuBackdrop onClick={() => onBackdropClickHandler()} />
      </CSSTransition>
    </>
  )
}

export default UserMenu
