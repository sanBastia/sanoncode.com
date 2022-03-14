import { FunctionComponent } from 'react'

interface ArticleProps {
  body?: string
}

export const Article: FunctionComponent<ArticleProps> = ({ body }) => {
  return <article>{body}</article>
}

export default Article
