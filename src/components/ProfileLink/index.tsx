import React, { useState } from 'react'
import Link from 'next/link'
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

const ProfileLink = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <S.Wrapper>
        <S.ProfileButton
          onClick={() => setIsVisible((old) => !old)}
          isActive={isVisible}
        >
          <S.ImageIcon src={'/img/profile-thumb.jpg'} />
        </S.ProfileButton>
        <S.Dropdown isVisible={isVisible}>
          <S.DropdownList>
            <S.DropdownItem>
              <Link href="/">
                <>
                  {' '}
                  <HeartIcon />
                  <span>Pontos Favoritos</span>
                </>
              </Link>
            </S.DropdownItem>
            <S.DropdownItem>
              <Link href="/">
                <>
                  <InviteIcon />
                  <span>Códigos de convite</span>
                </>
              </Link>
            </S.DropdownItem>
            <hr />
            <S.DropdownItem>
              <Link href="/">
                <>
                  <PersonIcon />
                  <span>Minha conta</span>
                </>
              </Link>
            </S.DropdownItem>
            <S.DropdownItem>
              <Link href="/">
                <>
                  <CogIcon />
                  <span>Configurações</span>
                </>
              </Link>
            </S.DropdownItem>
            <S.DropdownItem>
              <Link href="/">
                <>
                  <ExitIcon />
                  <span>Sair</span>
                </>
              </Link>
            </S.DropdownItem>
          </S.DropdownList>
        </S.Dropdown>
      </S.Wrapper>
      <S.Backdrop isVisible={isVisible} onClick={() => setIsVisible(false)} />
    </>
  )
}

export default ProfileLink
