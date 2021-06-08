import { useState } from 'react'
import SimpleBar from 'simplebar-react'
import { CSSTransition } from 'react-transition-group'

import ShareDropdown from '../ShareDropdown'

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
    categories: { name: string; value: string; color: { hex: string } }[]
    gallery: { url: string }[]
  }
  closePane: () => void
}

const PlacePane = ({ isVisible, data, closePane }: PlacePaneProps) => {
  const onCloseButtonClick = () => {
    closePane()
  }
  const [isShareActive, setIsShareActive] = useState(false)

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
                {data.categories
                  ? data.categories.map(
                      // @ts-ignore
                      (tag: { color: string; label: string }, index) => (
                        // @ts-ignore
                        <S.PlacePaneTag key={index} bgc={tag.color.hex}>
                          {/* @ts-ignore */}
                          {tag.name}
                        </S.PlacePaneTag>
                      )
                    )
                  : null}
              </S.PlacePaneTagList>

              {/* Title */}
              <S.PlacePaneTitle>{data.name}</S.PlacePaneTitle>
              {/* Description */}
              <S.PlacePaneDescription
                dangerouslySetInnerHTML={{
                  // @ts-ignore
                  __html: data.aboutText?.html || '',
                }}
              ></S.PlacePaneDescription>
            </SimpleBar>
          </S.PlacePaneBody>
          {/* Footer */}
          <S.PlacePaneFooter>
            <S.PlacePaneShareWrapper>
              <S.PlacePaneShareButton
                onClick={() => setIsShareActive((old) => !old)}
              >
                <ShareIcon />
                <span className="label">Compartilhar</span>
              </S.PlacePaneShareButton>
              <ShareDropdown
                isActive={isShareActive}
                url={`https://pontosdeluz.vercel.app/place/${data.slug}`}
              />
              <S.PlacePaneShareMenu></S.PlacePaneShareMenu>
            </S.PlacePaneShareWrapper>
            <S.PlacePaneMoreLinkWrapper>
              <Link href={`/place/${data.slug}`}>
                <span>
                  Acessar página completa <ReadMoreIcon />
                </span>
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
