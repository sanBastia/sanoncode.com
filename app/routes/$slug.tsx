import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { gql } from 'urql'
import { ArticleBody } from '~/components'
import { graphcmsClient, markdocParseTransform } from '~/lib'
import { Article } from '~/types'
import Markdoc, { RenderableTreeNode } from '@markdoc/markdoc'

type ArticleSlugData = {
  article: Article
  content: RenderableTreeNode
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

export default function ArticleSlug() {
  const data = useLoaderData<ArticleSlugData>()

  return (
    <main>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-400 hover:text-blue-900 uppercase">
              javascript
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {data.article.title}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            {data.article.excerpt}
          </p>
        </div>
        <ArticleBody body={data.content} />
      </div>
    </main>
  )
}
