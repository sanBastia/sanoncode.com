import { FunctionComponent } from 'react'
import Markdoc from '@markdoc/markdoc'
import { markdocRenderReact } from '~/lib'
import React from 'react'

interface ArticleProps {
  body: any
}

export const Article: FunctionComponent<ArticleProps> = ({ body }) => {
  return (
    <article>
      <>{markdocRenderReact(body)}</>
    </article>
  )
}

export default Article
