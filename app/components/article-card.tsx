import { FunctionComponent } from 'react'
import { Link, useLocation } from 'remix'

interface ArticleCardProps {
  title: string
  slug: string
  date: string
  readTime: number
  excerpt?: string
}

export const ArticleCard: FunctionComponent<ArticleCardProps> = ({
  title,
  slug,
  date,
  readTime,
  excerpt,
}) => {
  const formattedDate = new Date(date)

  return (
    <Link to={slug}>
      <div className="article">
        <div className="article-content">
          <div className="article-content-title">
            <h1>{title}</h1>
          </div>
          <div className="article-content-date">
            <span>{formattedDate.toDateString().substring(4)}</span>
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
    </Link>
  )
}

export default ArticleCard
