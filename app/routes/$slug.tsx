import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from 'urql'
import { Article } from '~/components'
import { graphcmsClient } from '~/lib'
import { TArticle } from '~/types'

type ArticleSlugData = TArticle

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

  // https://remix.run/api/remix#json
  return json(article)
}

export default function ArticleSlug() {
  const article = useLoaderData<ArticleSlugData>()

  return (
    <main>
      <h1>Article</h1>
      {/* <pre>{JSON.stringify(article, null, 2)}</pre> */}
      <Article body={article.body} />
    </main>
  )
}
