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
              <a
                href="https://app.graphcms.com/582d048eddf8400783e74e6f8df6097e/master/schema/model/Place"
                target="_blank"
                rel="noreferrer"
              >
                <>
                  {' '}
                  <SparklesIcon className="sub-icon" />
                  <PlusIcon className="plus-icon" />
                  <span>Submeter um ponto para este mapa</span>
                </>
              </a>
            </S.AddMenuDropdownItem>
            <S.AddMenuDropdownItem>
              <Link href="/">
                <>
                  {' '}
                  <MapIcon className="sub-icon" />
                  <PlusIcon className="plus-icon" />
                  <span>Criar meu próprio mapa</span>
                </>
              </Link>
            </S.AddMenuDropdownItem>
          </S.AddMenuDropdownList>
        </S.AddMenuDropdown>
      </S.Wrapper>
    </>
  )
}

export default AddMenu
