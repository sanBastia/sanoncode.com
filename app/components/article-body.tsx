import { FunctionComponent } from 'react'
import { markdocRenderReact } from '~/libs'

interface ArticleBodyProps {
  body: any
}

export const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ body }) => {
  return (
    <div className="max-w-2xl mx-auto prose md:prose-lg lg:prose-xl dark:prose-invert">
      {markdocRenderReact(body)}
    </div>
  )
}

export default ArticleBody
