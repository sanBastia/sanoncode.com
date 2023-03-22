import { json, LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { gql } from 'urql'
import { ArticleBody } from '~/components'
import { graphcmsClient, markdocParseTransform } from '~/lib'
import { Article } from '~/types'
import { RenderableTreeNode } from '@markdoc/markdoc'
import { Coffee, CalendarDays } from 'lucide-react'

type ArticleSlugData = {
  article: Article
  content: RenderableTreeNode
}
export const meta: MetaFunction = ({
  data: { article },
}: {
  data: { article: any }
}) => {
  const articleTitle = `${article.title}`
  const articleDesc = `${article.excerpt}`

  return {
    title: articleTitle,
    description: articleDesc,
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const oneArticleQuery = gql`
    query OneArticle($slug: String!) {
      article(where: { slug: $slug }) {
        id
        slug
        title
        date
        readTime
        excerpt
        body
      }
    }
  `
  const response = await graphcmsClient
    .query(oneArticleQuery, { slug: params.slug })
    .toPromise()

  const article = response.data.article

  const content = markdocParseTransform(article.body)

  // https://remix.run/api/remix#json
  return json({ article, content })
}

function minutesRead(body: any) {
  const text = body
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)

  return time
}

export default function ArticleSlug() {
  const data = useLoaderData<ArticleSlugData>()
  const formattedDate = new Date(data.article.date)
  return (
    <main>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold text-blue-400 hover:text-blue-900 uppercase">
              javascript
            </p>
          </div>
          <h1 className="mb-2 text-4xl lg:text-6xl font-bold leading-relaxed tracking-normal text-gray-900 md:mx-auto dark:text-textDark">
            {data.article.title}
          </h1>
          <div className="max-w-lg py-4 flex mx-auto justify-center gap-6">
            <span className="flex gap-1">
              <CalendarDays />
              {formattedDate.toDateString().substring(4)}
            </span>

            <span className="flex gap-1">
              <Coffee />
              {minutesRead(data.article.body)} minutes read
            </span>
          </div>
          {/* <p className="text-base text-gray-700  bg-slate-200 md:text-lg">
            {data.article.excerpt}
          </p> */}
        </div>
        <ArticleBody body={data.content} />
      </div>
    </main>
  )
}
