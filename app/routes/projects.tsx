import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { Container, Hero, Layout } from '~/components'

export const meta: MetaFunction = () => {
  return {
    title: 'Projects by Sanoncode',
    description: 'San Sebastian projects',
  }
}

export const loader: LoaderFunction = async () => {
  return json([
    {
      id: 1,
    },
    {
      id: 2,
    },
  ])
}

export default function ProjectsRoute() {
  const projects = useLoaderData()

  return (
    <Layout>
      <Container>
        <Hero />
        <pre>{JSON.stringify(projects, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error cannot retrieve projects</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  )
}
