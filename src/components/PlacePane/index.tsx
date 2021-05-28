import SimpleBar from 'simplebar-react'
import { Share as ShareIcon } from '@styled-icons/remix-line'
import { ArrowRight as ArrowRightIcon } from '@styled-icons/typicons'
import { Times as TimesIcon } from '@styled-icons/fa-solid/Times'
import Link from 'next/link'

import 'simplebar/dist/simplebar.min.css'
import * as S from './styles'

type PlacePaneProps = {
  isVisible: boolean
  data: {
    id: string
    name: string
  }
  closePane: () => void
}

const PlacePane = ({ isVisible = false, data, closePane }: PlacePaneProps) => {
  const onCloseButtonClick = () => {
    closePane()
  }

  return (
    <S.PlacePaneWrapper isVisible={isVisible}>
      <S.PlacePanePane>
        <S.PlacePaneCloseButton
          className="close-button"
          onClick={onCloseButtonClick}
        >
          <TimesIcon />
        </S.PlacePaneCloseButton>
        {/* Img */}
        <S.PlacePaneImgWrapper>
          <S.PlacePaneImg src="/img/indigenasyanawa.png" />
        </S.PlacePaneImgWrapper>
        {/* Body */}
        <S.PlacePaneBody>
          {/* Tags */}
          <SimpleBar
            autoHide={false}
            style={{
              height: '100%',
            }}
          >
            <S.PlacePaneTagList>
              <span>ponto de luz</span>
              <S.PlacePaneTag bgc="#533212">xamanismo</S.PlacePaneTag>
              <S.PlacePaneTag bgc="#ca5639">natureza</S.PlacePaneTag>
              <S.PlacePaneTag bgc="#815dd6">terapias holísticas</S.PlacePaneTag>
            </S.PlacePaneTagList>
            {/* Title */}
            <S.PlacePaneTitle>Reserva Indígena Yanawá</S.PlacePaneTitle>
            {/* Description */}
            <S.PlacePaneDescription>
              <p>
                Qual Amazônia você quer conhecer? Sua verde imensidão abriga ao
                mesmo tempo uma floresta, nove países, a maior biodiversidade do
                mundo em um ecossistema tropical, nove estados brasileiros e a
                maior população indígena do Brasil.
              </p>
              <h4>neste ponto você encontra:</h4>
              <ul>
                <li>• Contato com a natureza</li>
                <li>• Experiência multicultural</li>
                <li>• Artesanato local</li>
                <li>• Medicinas nativas</li>
                <li>• Oficinas e workshops</li>
              </ul>

              <h4>como entrar em contato:</h4>
              <ul>
                <li>
                  • emal:{' '}
                  <a
                    target="_blank"
                    href="mailto:contato@reservawanawa.com.br"
                    rel="noreferrer"
                  >
                    contato@reservawanawa.com.br
                  </a>{' '}
                </li>
                <li>
                  • fones:
                  <a
                    target="_blank"
                    href="phoneto:(33)99321-3233"
                    rel="noreferrer"
                  >
                    (33) 99321-3233
                  </a>
                  <a
                    target="_blank"
                    href="phoneto:(33)99321-3233"
                    rel="noreferrer"
                  >
                    (33) 3253-9422
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  • emal:{' '}
                  <a
                    target="_blank"
                    href="mailto:contato@reservawanawa.com.br"
                    rel="noreferrer"
                  >
                    contato@reservawanawa.com.br
                  </a>{' '}
                </li>
                <li>
                  • fones:
                  <a
                    target="_blank"
                    href="phoneto:(33)99321-3233"
                    rel="noreferrer"
                  >
                    (33) 99321-3233
                  </a>
                  <a
                    target="_blank"
                    href="phoneto:(33)99321-3233"
                    rel="noreferrer"
                  >
                    (33) 3253-9422
                  </a>
                </li>
              </ul>
            </S.PlacePaneDescription>
          </SimpleBar>
        </S.PlacePaneBody>
        {/* Footer */}
        <S.PlacePaneFooter>
          <S.PlacePaneShareWrapper>
            <S.PlacePaneShareButton>
              <ShareIcon />
              <span className="label">Compartilhar</span>
            </S.PlacePaneShareButton>
            <S.PlacePaneShareMenu></S.PlacePaneShareMenu>
          </S.PlacePaneShareWrapper>
          <S.PlacePaneMoreLinkWrapper>
            <Link href="/">
              <>
                Ler mais <ArrowRightIcon />
              </>
            </Link>
          </S.PlacePaneMoreLinkWrapper>
        </S.PlacePaneFooter>
      </S.PlacePanePane>
    </S.PlacePaneWrapper>
  )
}

export default PlacePane
