import React, { useState } from 'react'

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
      <S.UserMenuBackdrop
        isVisible={isProfileMenuActive || isNotifyMenuActive || isAddMenuActive}
        onClick={() => onBackdropClickHandler()}
      />
    </>
  )
}

export default UserMenu
