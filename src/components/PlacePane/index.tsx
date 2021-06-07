import SimpleBar from 'simplebar-react'
import { CSSTransition } from 'react-transition-group'

import { Share as ShareIcon } from '@styled-icons/remix-line'
import { ReadMore as ReadMoreIcon } from '@styled-icons/material-rounded'
import { Times as TimesIcon } from '@styled-icons/fa-solid/Times'
import Link from 'next/link'

import 'simplebar/dist/simplebar.min.css'
import * as S from './styles'

type PlacePaneProps = {
  isVisible: boolean
  data: {
    id: string
    name: string
    slug: string
    aboutText: {
      html: FunctionStringCallback
    }
    tags: { label: string; color: string }[]
    gallery: { url: string }[]
  }
  closePane: () => void
}

const PlacePane = ({ isVisible = false, data, closePane }: PlacePaneProps) => {
  const onCloseButtonClick = () => {
    closePane()
  }

  return (
    <>
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
            <S.PlacePaneImg src={data.gallery ? data.gallery[0].url : ''} />
          </S.PlacePaneImgWrapper>
          {/* Body */}
          <S.PlacePaneBody>
            {/* Tags */}
            <SimpleBar
              autoHide={false}
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <S.PlacePaneTagList>
                <span>ponto de luz</span>
                {data.tags
                  ? data.tags.map(
                      (tag: { color: string; label: string }, index) => (
                        <S.PlacePaneTag key={index} bgc={tag.color}>
                          {tag.label}
                        </S.PlacePaneTag>
                      )
                    )
                  : null}
                {/* <S.PlacePaneTag bgc="#533212">xamanismo</S.PlacePaneTag>
                  <S.PlacePaneTag bgc="#ca5639">natureza</S.PlacePaneTag>
                  <S.PlacePaneTag bgc="#815dd6">
                    terapias holísticas
                  </S.PlacePaneTag> */}
              </S.PlacePaneTagList>

              {/* Title */}
              <S.PlacePaneTitle>{data.name}</S.PlacePaneTitle>
              {/* Description */}
              <S.PlacePaneDescription
                dangerouslySetInnerHTML={{
                  // @ts-ignore
                  __html: data.aboutText?.html || '',
                }}
              >
                {/* <p></p>
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
                  </ul> */}
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
              <Link href={`'ponto/'${data.slug}`}>
                <>
                  Acessar página completa <ReadMoreIcon />
                </>
              </Link>
            </S.PlacePaneMoreLinkWrapper>
          </S.PlacePaneFooter>
        </S.PlacePanePane>
      </S.PlacePaneWrapper>

      <S.PlacePaneBackdrop isVisible={isVisible} onClick={onCloseButtonClick} />
    </>
  )
}

export default PlacePane
