import React from 'react'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'

import { Plus as PlusIcon } from '@styled-icons/heroicons-outline'
import { MapAlt as MapIcon } from '@styled-icons/boxicons-regular/MapAlt'
import { Sparkles as SparklesIcon } from '@styled-icons/ionicons-outline'

import * as S from './styles'

type AddMenuProps = {
  isActive: boolean
  toggleActive: () => void
}

const AddMenu = ({ isActive = false, toggleActive }: AddMenuProps) => {
  return (
    <>
      <S.Wrapper>
        <S.AddMenuButton onClick={() => toggleActive()} isActive={isActive}>
          <PlusIcon />
        </S.AddMenuButton>
        {/* @ts-ignore */}
        <S.AddMenuDropdown isActive={isActive}>
          <S.AddMenuDropdownList>
            <S.AddMenuDropdownItem>
              <Link href="/em-desenvolvimento">
                <div className="wrapper">
                  {' '}
                  <SparklesIcon className="sub-icon" />
                  <PlusIcon className="plus-icon" />
                  <span>Submeter um ponto para este mapa</span>
                </div>
              </Link>
            </S.AddMenuDropdownItem>
            <S.AddMenuDropdownItem>
              <Link href="/em-desenvolvimento">
                <div className="wrapper">
                  {' '}
                  <MapIcon className="sub-icon" />
                  <PlusIcon className="plus-icon" />
                  <span>Criar meu próprio mapa</span>
                </div>
              </Link>
            </S.AddMenuDropdownItem>
          </S.AddMenuDropdownList>
        </S.AddMenuDropdown>
      </S.Wrapper>
    </>
  )
}

export default AddMenu
