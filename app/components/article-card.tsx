import { FunctionComponent } from 'react'

interface ArticleCardProps {
  title: string
  date: string
  readTime: number
  excerpt: string
}

export const ArticleCard: FunctionComponent<ArticleCardProps> = ({
  title,
  date,
  readTime,
  excerpt,
}) => {
  return (
    <div className="article">
      <div className="article-content">
        <div className="article-content-title">
          <h1>{title}</h1>
        </div>
        <div className="article-content-date">
          <span>{date}</span>
          <span>
            <img
              className="coffee"
              src="/images/icon-coffee.svg"
              alt="coffee"
            />{' '}
            {readTime} minutes read
          </span>
        </div>
        <div className="article-content-post">
          <p>{excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
