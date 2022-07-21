import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { ArticleCard, Hero, ProjectCard, SubHeading } from '~/components'
import { Articles } from '~/types'
import { gql } from '@urql/core'
import { graphcmsClient } from '~/lib'

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

  const response = await graphcmsClient.query(allArticlesQuery).toPromise()
  const articles = response.data.articles

  // https://remix.run/api/remix#json
  return json(articles)
}

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Sanoncode',
    description: 'San Sebastian personal website',
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const articles = useLoaderData<IndexData>()

  return (
    <>
      <Hero />
      <SubHeading
        title="Projects"
        excerpt="Things that i build and maintain some of them until now"
      />
      <ProjectCard />
      <SubHeading
        title="Writings"
        excerpt="Taking some notes based on my experiences"
      />
      <ArticleCard articles={articles} />
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
