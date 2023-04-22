import { LoaderFunction, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { ArticleCard } from "~/components";
import { gql, graphcmsClient } from "~/libs";

import { Articles } from "~/types";
type writingsData = Articles

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const meta: MetaFunction = () => {
  return {
    title: 'Writings',
    description: 'San Sebastian personal website',
  }
}

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

export default function Writings(){
    const articles = useLoaderData<writingsData>()
    return <ArticleCard articles={articles} />
} 