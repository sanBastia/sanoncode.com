import { FunctionComponent } from 'react'
import { markdocRenderReact } from '~/lib'

interface ArticleBodyProps {
  body: any
}

export const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ body }) => {
  return <>{markdocRenderReact(body)}</>
}

export default ArticleBody
