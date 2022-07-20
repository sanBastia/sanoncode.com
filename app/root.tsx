import type { LinksFunction } from '@remix-run/node'
import { json, LoaderFunction } from '@remix-run/node'

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react'

import styles from '~/styles/output.css'

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
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
    ENV: {
      GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
      NODE_ENV: process.env.NODE_ENV,
    },
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
    <main className="bg-white relative overflow-auto h-screen">
      <header className="h-24 sm:h-32 flex items-center  w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="capitalize text-black flex items-center">
            <span className="text-xl md:text-4xl ml-3 mt-1 font-bold">
              sanoncode
            </span>
          </div>
          <div className="flex items-center">
            <nav className="uppercase text-xs md:text-xl flex flex-row justify-start">
              <a href="#" className="px-2 flex text-black">
                Works
              </a>
              <a href="#" className="px-2 flex text-black">
                Writing
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex relative items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
          <div className="flex">
            <img
              src="/images/avatar.jpg"
              className="rounded-lg h-28 w-28 mx-auto"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl md:text-4xl my-6 text-center text-black">
              Hi, I&#x27;m San Sebastian 🤘
            </p>
            <p className="text-lg md:text-2xl mx-auto text-center py-2">
              Building digital products, brands, and experiences.
            </p>
          </div>
          <div className="flex justify-center">
            <a href="https://github.com/sanBastia" target="_blank">
              <img
                className="p-4 flex"
                src="/images/icon-github.svg"
                alt="GitHub"
              />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img
                className="p-4 flex"
                src="/images/icon-twitter.svg"
                alt="Twitter"
              />
            </a>
            <a href="https://www.linkedin.com/in/sanbastia/" target="_blank">
              <img
                className="p-4 flex"
                src="/images/icon-linkedin.svg"
                alt="Linkedin"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto px-4">
        <div className="remix-app__main">
          <div className="container remix-app__main-content">{children}</div>
        </div>
      </div> */}
    </main>
  )
}
