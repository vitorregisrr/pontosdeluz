import React from 'react'
import Link from 'next/link'
import { InfoOutline as InfoIcon } from '@styled-icons/evaicons-outline/InfoOutline'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  position?: string
}

const LinkWrapper = ({ href, position = 'top' }: LinkWrapperProps) => (
  <S.Wrapper position={position}>
    <Link href={href}>
      <span>
        <InfoIcon size="32" />
        <S.LinkLabel>
          <span>Sobre este mapa</span>
        </S.LinkLabel>
      </span>
    </Link>
  </S.Wrapper>
)

export default LinkWrapper
