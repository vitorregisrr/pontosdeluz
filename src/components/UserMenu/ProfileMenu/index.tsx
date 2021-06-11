import React, { useState } from 'react'
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

import { SignInAlt as SignInIcon } from '@styled-icons/fa-solid'
import { PersonPlusFill as SignUpIcon } from '@styled-icons/bootstrap'

import * as S from './styles'

type ProfileMenuProps = {
  isActive: boolean
  toggleActive: () => void
}

const ProfileMenu = ({ isActive = false, toggleActive }: ProfileMenuProps) => {
  const [isLogged, setIsLogged] = useState(false)

  const links = {
    isLogged: [
      {
        Ico: PersonIcon,
        label: 'Meu Perfil',
        href: '/em-desenvolvimento',
      },
      {
        Ico: HeartIcon,
        label: 'Meus favoritos',
        href: '/em-desenvolvimento',
      },
      {
        Ico: InviteIcon,
        label: 'Códigos de convite',
        href: '/em-desenvolvimento',
      },
      {
        Ico: PersonIcon,
        label: 'Minha conta',
        href: '/em-desenvolvimento',
      },
      {
        Ico: 'ExitIcon',
        label: 'Sair da conta',
        href: '/em-desenvolvimento',
      },
    ],
    isNotLogged: [
      {
        Ico: SignInIcon,
        label: 'Entrar',
        href: '/em-desenvolvimento',
      },
      {
        Ico: SignUpIcon,
        label: 'Criar conta',
        href: '/em-desenvolvimento',
      },
    ],
  }

  const currLinks = isLogged ? links.isLogged : links.isNotLogged

  return (
    <>
      {/* @ts-ignore */}
      <S.Wrapper isActive={isActive}>
        <S.ProfileButton onClick={() => toggleActive()} isActive={isActive}>
          <S.ImageIcon src={'/img/profile-thumb.png'} />
        </S.ProfileButton>
        <S.ProfileDropdown isActive={isActive}>
          <S.ProfileDropdownList>
            {currLinks.map(({ href, label, Ico }) => {
              return (
                <S.ProfileDropdownItem key={href}>
                  <Link href={href}>
                    <label className="wrapper">
                      <Ico /> <span>{label}</span>
                    </label>
                  </Link>
                </S.ProfileDropdownItem>
              )
            })}
          </S.ProfileDropdownList>
        </S.ProfileDropdown>
      </S.Wrapper>
    </>
  )
}

export default ProfileMenu
