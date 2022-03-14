import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from 'urql'
import { graphcmsClient } from '~/lib'
import { Article } from '~/types'

type ArticleSlugData = Article

export const loader: LoaderFunction = async () => {
  const oneArticleQuery = gql`
    query OneArticle {
      article(where: { slug: "..." }) {
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
  const response = await graphcmsClient.query(oneArticleQuery).toPromise()
  const article = response.data.article

  // https://remix.run/api/remix#json
  return json(article)
}

export default function ArticleSlug() {
  const article = useLoaderData<ArticleSlugData>()

  return (
    <main>
      <h1>Article</h1>
      <pre>{JSON.stringify(article, null, 2)}</pre>
    </main>
  )
}
