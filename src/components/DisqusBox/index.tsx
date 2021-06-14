import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

type CommentsProps = {
  url: string
  title: string
  category: string
}

const Comments = ({ url, title, category }: CommentsProps) => {
  const completeURL = `${'https://pontosdeluz.vercel.app'}${url}`

  return (
    <S.CommentsWrapper>
      <ReactDisqusComments
        shortname="pontos-de-luz"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

export default Comments
