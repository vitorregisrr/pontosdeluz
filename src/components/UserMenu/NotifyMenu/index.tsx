import React from 'react'
import Link from 'next/link'
import { Bell as BellIcon } from '@styled-icons/boxicons-solid'
import { MapAlt as MapIcon } from '@styled-icons/boxicons-regular/MapAlt'
import { Sparkles as SparklesIcon } from '@styled-icons/ionicons-outline'

import * as S from './styles'

type NotifyMenuProps = {
  isActive: boolean
  toggleActive: () => void
}

const NotifyMenu = ({ isActive = false, toggleActive }: NotifyMenuProps) => {
  return (
    <>
      <S.Wrapper>
        <S.NotifyButton onClick={() => toggleActive()} isActive={isActive}>
          <BellIcon />
          <span className="number">2</span>
        </S.NotifyButton>
        <S.NotifyDropdown isVisible={isActive}>
          <S.NotifyDropdownList>
            <S.NotifyDropdownItem>
              <Link href="/">
                <>
                  <div className="icon-wrapper">
                    <MapIcon />
                  </div>
                  <div className="body">
                    <h4 className="title">
                      {`Hey, alguém submeteu um ponto para seu mapa!`}
                    </h4>
                    <p className="desc">{`Vitor Régis (@vitorregisr) submeteu o ponto "Templo Budista em
                   Mongi das Cruzes" no seu mapa Ponto de Luz, você poderia avaliar
                  esta submissão?`}</p>
                  </div>
                </>
              </Link>
            </S.NotifyDropdownItem>

            <S.NotifyDropdownItem>
              <Link href="/">
                <>
                  <div className="icon-wrapper">
                    <MapIcon />
                  </div>
                  <div className="body">
                    <h4 className="title">
                      {`Seu mapa "Pontos de Luz" teve 321 visualizações nesta semana!`}
                    </h4>
                    <p className="desc">{`Seu mapa tá bombando ein? Que tal dar uma analisada nas estatísticas das suas
                  visitas e revisar algumas submissões de pontos? `}</p>
                  </div>
                </>
              </Link>
            </S.NotifyDropdownItem>

            <S.NotifyDropdownItem>
              <Link href="/">
                <>
                  <div className="icon-wrapper">
                    <SparklesIcon />
                  </div>
                  <div className="body">
                    <h4 className="title">
                      {`Sua submissão do ponto "Ecovila Pachamama" no mapa "Pontos de luz foi aprovado!"`}
                    </h4>
                    <p className="desc">{`Parece que sua submissão acaba de ser aprovada pelo admnistrador Vitor Régis (@vitorregisr), 
                  que tal visitar o mapa para ver este ponto e enviar uma mensagem de agradecimento para ele?`}</p>
                  </div>
                </>
              </Link>
            </S.NotifyDropdownItem>
          </S.NotifyDropdownList>
        </S.NotifyDropdown>
      </S.Wrapper>
    </>
  )
}

export default NotifyMenu
