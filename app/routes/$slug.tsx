import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from 'urql'
import { Article } from '~/components'
import { graphcmsClient, markdocParseTransform } from '~/lib'
import { TArticle } from '~/types'
import Markdoc, { RenderableTreeNode } from '@markdoc/markdoc'

type ArticleSlugData = {
  article: TArticle
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
  console.log(content)
  // https://remix.run/api/remix#json
  return json({ article, content })
}

export default function ArticleSlug() {
  const data = useLoaderData<ArticleSlugData>()

  return (
    <main>
      <h1>{data.article.title}</h1>
      <Article body={data.content} />
    </main>
  )
}
