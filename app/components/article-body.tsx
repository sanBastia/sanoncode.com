import { FunctionComponent } from 'react'
import { markdocRenderReact } from '~/lib'

interface ArticleBodyProps {
  body: any
}

export const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ body }) => {
  return (
    <div className="max-w-2xl mx-auto prose">{markdocRenderReact(body)}</div>
  )
}

export default ArticleBody
