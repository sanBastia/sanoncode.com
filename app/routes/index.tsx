import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { ArticleCard, Hero, ProjectCard, SubHeading } from '~/components'
import { Articles } from '~/types'
import { gql } from '@urql/core'
import { graphcmsClient } from '~/libs'

type IndexData = Articles

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async () => {
  const allArticlesQuery = gql`
    query AllArticles {
      articles(orderBy: createdAt_DESC) {
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

  const response = await graphcmsClient.query(allArticlesQuery,{}).toPromise()
  const articles = response.data.articles

  // https://remix.run/api/remix#json
  return json(articles)
}

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Hi, I am San Sebastian 🤘',
    description: 'San Sebastian personal website',
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const articles = useLoaderData<IndexData>()

  return (
    <>
      <div className="flex flex-col divide-y divide-double divide-gray-900 dark:divide-white">
        <Hero />
        <ProjectCard />
        <ArticleCard articles={articles} />
      </div>
    </>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Cannot retrieve articles</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  )
}
