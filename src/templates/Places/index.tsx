import { useState } from 'react'
import SimpleBar from 'simplebar-react'
import dynamic from 'next/dynamic'
import LinkWrapper from 'components/UI/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import DisqusBox from 'components/DisqusBox'
import { useRouter } from 'next/dist/client/router'

import { ShareSquare as ShareIcon } from '@styled-icons/fa-regular'

const Map = dynamic(() => import('./Map'), {
  ssr: false,
})

// @ts-ignore
import * as S from './styles.ts'
import ShareDropdown from 'components/ShareDropdown'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    id: string
    name: string
    slug: string
    aboutText: {
      html: FunctionStringCallback
    }
    categories: { name: string; value: string; color: { hex: string } }[]
    gallery: ImageProps[]
    resume: string
    cordinates: {
      latitude: number
      longitude: number
    }
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()
  const [isShareActive, setIsShareActive] = useState(false)

  if (router.isFallback) return null

  return (
    <>
      <LinkWrapper href="/">
        <span style={{ color: '#010714' }}>
          <CloseOutline size={32} aria-label="Go back to map" />
        </span>
      </LinkWrapper>
      <S.Wrapper>
        <SimpleBar
          // @ts-ignore
          autoHide={false}
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          <S.Container>
            <S.TagList>
              <span>ponto de luz</span>
              {place.categories
                ? place.categories.map(
                    // @ts-ignore
                    (tag: { color: string; label: string }, index) => (
                      // @ts-ignore
                      <S.Tag key={index} bgc={tag.color.hex}>
                        {/* @ts-ignore */}
                        {tag.name}
                      </S.Tag>
                    )
                  )
                : null}
            </S.TagList>
            <S.Heading>
              {place.name}{' '}
              <S.ShareWrapper>
                <S.ShareButton onClick={() => setIsShareActive((old) => !old)}>
                  <ShareIcon size={40} />
                </S.ShareButton>
                <ShareDropdown
                  url={`https://pontosdeluz.vercel.app/place/${place.slug}`}
                  isActive={isShareActive}
                />
              </S.ShareWrapper>
            </S.Heading>
            <S.Body
              // @ts-ignore
              dangerouslySetInnerHTML={{ __html: place.aboutText?.html || '' }}
            />
          </S.Container>
          <Map place={place} />

          <S.Container>
            <S.Gallery>
              {place.gallery.map((image, index) => (
                <img key={`photo-${index}`} src={image.url} alt={place.name} />
              ))}
            </S.Gallery>

            <DisqusBox
              category={``}
              url={`/place/${place.slug}`}
              title={place.name}
            ></DisqusBox>
          </S.Container>
        </SimpleBar>
      </S.Wrapper>
    </>
  )
}
