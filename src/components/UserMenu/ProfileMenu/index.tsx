import React from 'react'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'
import {
  MailSend as InviteIcon,
  HeartCircle as HeartIcon,
} from '@styled-icons/boxicons-regular'
import {
  ExitToApp as ExitIcon,
  PersonOutline as PersonIcon,
} from '@styled-icons/material'
import { Cog as CogIcon } from '@styled-icons/heroicons-outline'

import * as S from './styles'

type ProfileMenuProps = {
  isActive: boolean
  toggleActive: () => void
}

const ProfileMenu = ({ isActive = false, toggleActive }: ProfileMenuProps) => {
  return (
    <>
      {/* @ts-ignore */}
      <S.Wrapper isActive={isActive}>
        <S.ProfileButton onClick={() => toggleActive()} isActive={isActive}>
          <S.ImageIcon src={'/img/profile-thumb.jpg'} />
        </S.ProfileButton>
        <S.ProfileDropdown isActive={isActive}>
          <S.ProfileDropdownList>
            <S.ProfileDropdownItem>
              <Link href="/">
                <>
                  {' '}
                  <PersonIcon />
                  <span>Meu perfil</span>
                </>
              </Link>
            </S.ProfileDropdownItem>
            <S.ProfileDropdownItem>
              <Link href="/">
                <>
                  {' '}
                  <HeartIcon />
                  <span>Meus favoritos</span>
                </>
              </Link>
            </S.ProfileDropdownItem>
            <S.ProfileDropdownItem>
              <Link href="/">
                <>
                  <InviteIcon />
                  <span>Códigos de convite</span>
                </>
              </Link>
            </S.ProfileDropdownItem>
            <hr />
            <S.ProfileDropdownItem>
              <Link href="/">
                <>
                  <PersonIcon />
                  <span>Minha conta</span>
                </>
              </Link>
            </S.ProfileDropdownItem>
            <S.ProfileDropdownItem>
              <Link href="/">
                <>
                  <CogIcon />
                  <span>Configurações</span>
                </>
              </Link>
            </S.ProfileDropdownItem>
            <S.ProfileDropdownItem>
              <Link href="/">
                <>
                  <ExitIcon />
                  <span>Sair da conta</span>
                </>
              </Link>
            </S.ProfileDropdownItem>
          </S.ProfileDropdownList>
        </S.ProfileDropdown>
      </S.Wrapper>
    </>
  )
}

export default ProfileMenu
