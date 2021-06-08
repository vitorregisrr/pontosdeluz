import SimpleBar from 'simplebar-react'
import LinkWrapper from 'components/UI/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import DisqusBox from 'components/DisqusBox'
import { useRouter } from 'next/dist/client/router'

// @ts-ignore
import * as S from './styles.ts'

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
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <LinkWrapper href="/">
        <span style={{ color: '#020726' }}>
          <CloseOutline size={32} aria-label="Go back to map" />
        </span>
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <SimpleBar
            autoHide={false}
            style={{
              height: '100%',
              width: '100%',
            }}
          >
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
            <S.Heading>{place.name}</S.Heading>

            <S.Body
              // @ts-ignore
              dangerouslySetInnerHTML={{ __html: place.aboutText?.html || '' }}
            />

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
          </SimpleBar>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
