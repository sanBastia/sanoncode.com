import { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'

interface ArticleProps {
  body?: string
}

export const Article: FunctionComponent<ArticleProps> = ({ body }) => {
  return (
    <article>
      <ReactMarkdown>{body as string}</ReactMarkdown>
    </article>
  )
}

export default Article
