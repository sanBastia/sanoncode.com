import { json, LoaderFunction, useLoaderData } from 'remix'
import { Article } from '~/types'

type ArticleSlugData = Article

export const loader: LoaderFunction = async () => {
  const article = {
    id: 131313,
    title: 'some title',
    body: 'some body',
  }

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
