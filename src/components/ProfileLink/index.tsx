import React, { useState } from 'react'
import Link from 'next/link'
import {
  MailSend as InviteIcon,
  HeartCircle as HeartIcon,
} from '@styled-icons/boxicons-regular'
import { MapAlt as MapIcon } from '@styled-icons/boxicons-regular/MapAlt'
import {
  ExitToApp as ExitIcon,
  PersonOutline as PersonIcon,
} from '@styled-icons/material'
import {
  Cog as CogIcon,
  PlusSm as PlusIcon,
} from '@styled-icons/heroicons-outline'

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
                  <MapIcon class="sub-icon" />
                  <PlusIcon className="plus-icon" />
                  <span>Criar um mapa</span>
                </>
              </Link>
            </S.DropdownItem>
            <S.DropdownItem>
              <Link href="/">
                <>
                  {' '}
                  <HeartIcon />
                  <span>Meus favoritos</span>
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
                  <span>Sair da conta</span>
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
