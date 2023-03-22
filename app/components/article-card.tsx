import { FunctionComponent } from 'react'
import { Link } from '@remix-run/react'
import { Article, Articles } from '~/types'
import { SubHeading } from './sub-heading'

interface ArticleCardProps {
  articles: Articles
}

function minutesRead(body: string) {
  const text = body
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)

  return time
}
export const ArticleCard: FunctionComponent<ArticleCardProps> = ({
  articles,
}) => {
  return (
    <section id="writings">
      <SubHeading
        title="Writings"
        excerpt="Taking some notes based on my experiences"
      />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {articles.map((item, index) => {
            return <ArticleItem key={item.id || index} item={item} />
          })}
        </div>
      </div>
    </section>
  )
}

interface ArticleItemProps {
  item: Article
}
const ArticleItem: FunctionComponent<ArticleItemProps> = ({ item }) => {
  const formattedDate = new Date(item.date)
  const month = formattedDate.toString().split(' ')[1]
  const date = formattedDate.toString().split(' ')[2]
  return (
    <div className="flex">
      <div className="pt-1 mr-6 text-center">
        <div className="px-2 pb-1 mb-1 border-b border-gray-400">
          <p className="text-sm text-blue-gray-700">{month}</p>
        </div>
        <div className="px-2">
          <p className="text-lg font-bold">{date}</p>
        </div>
      </div>
      <div>
        <div className="mb-2">
          <Link
            to={item.slug}
            className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-blue-400 hover:text-blue-900 dark:text-[#0E8388]"
            aria-label="Category"
          >
            Javascript
          </Link>
        </div>
        <div className="mb-2">
          <Link
            to={item.slug}
            aria-label="Article"
            className="inline-block text-lg lg:text-2xl font-bold  leading-5 lg:leading-8 text-black transition-colors duration-200 hover:text-blue-900 dark:text-textDark"
          >
            {item.title}
          </Link>
        </div>
        <p className="mb-5 text-sm text-gray-700 dark:text-[#cbe4de8f]">
          {item.excerpt}
        </p>
        <div className="flex items-center">
          <a href="/" aria-label="Author" title="Author" className="mr-3">
            <img
              src="./images/avatar.jpg"
              alt="avatar"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              href="/"
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 dark:text-textDark"
            >
              San Sebastian
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600 dark:text-[#cbe4de8f]">
              Author
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ArticleCard
