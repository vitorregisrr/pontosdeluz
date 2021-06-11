import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/UI/LinkWrapper'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: { html: string }
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <S.Container>
      <LinkWrapper href="/">
        <span style={{ color: 'black' }}>
          {' '}
          <CloseOutline size={32} />
        </span>
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body.html }} />
      </S.Body>
    </S.Container>
  </S.Content>
)

export default PageTemplate
