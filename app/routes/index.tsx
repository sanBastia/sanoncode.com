import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, json, Link } from 'remix'
import {
  ArticleCard,
  Container,
  Divider,
  Hero,
  Layout,
  SubNavigation,
} from '~/components'

type IndexData = {
  resources: Array<{ name: string; url: string }>
  demos: Array<{ name: string; to: string }>
}

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
  // https://remix.run/api/remix#json
  return json({})
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
  const data = useLoaderData<IndexData>()

  return (
    <Layout>
      <Container>
        <Hero />
        <SubNavigation />
        <Divider />
        <ArticleCard
          title="Mari kita bahas destructuring"
          readTime={6}
          date="28 Feb 2022"
          excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quisquam molestias facere saepe quas dicta at eum
                cumque. Dolorem sint saepe dignissimos fugit esse a molestiae
                cumque ullam autem nam."
        />
        <ArticleCard
          title="Tiga titik dalam javascript"
          readTime={5}
          date="1 Jan 2022"
          excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quisquam molestias facere saepe quas dicta at eum
                cumque. Dolorem sint saepe dignissimos fugit esse a molestiae
                cumque ullam autem nam."
        />
      </Container>
    </Layout>
  )
}
