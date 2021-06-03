import React from 'react'
import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
  position?: string
}

const LinkWrapper = ({
  href,
  children,
  position = 'top',
}: LinkWrapperProps) => (
  <S.Wrapper position={position}>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
