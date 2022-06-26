import {
  json,
  Link,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from 'remix'
import type { LinksFunction } from 'remix'

import globalStylesUrl from '~/styles/global.css'
import darkStylesUrl from '~/styles/dark.css'

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&display=swap',
    },
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
    // {
    //   rel: 'stylesheet',
    //   href: darkStylesUrl,
    //   media: '(prefers-color-scheme: dark)',
    // },
  ]
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>Sorry, there was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )
}
export const loader: LoaderFunction = async () => {
  return json({
    ENV: { NODE_ENV: process.env.NODE_ENV },
  })
}
function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const data = useLoaderData()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {data?.ENV && (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data?.ENV)};`,
            }}
          />
        )}
      </body>
    </html>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app">
      <header className="remix-app__header">
        <div className="container remix-app__header-content">
          <Link to="/" title="Remix" className="remix-app__header-home-link">
            <p className="brand">Sanoncode</p>
          </Link>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </header>

      <div className="remix-app__main">
        <div className="container remix-app__main-content">{children}</div>
      </div>

      <footer className="remix-app__footer">
        <p className="container remix-app__footer-content">
          <a href="https://github.com/sanBastia" target="_blank">
            Github
          </a>{' '}
          |{' '}
          <a href="https://twitter.com/" target="_blank">
            Twitter
          </a>{' '}
          |{' '}
          <a href="https://www.linkedin.com/in/sanbastia/" target="_blank">
            Linkedin{' '}
          </a>
        </p>
      </footer>
    </div>
  )
}
