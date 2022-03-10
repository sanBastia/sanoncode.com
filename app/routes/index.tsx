import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, json, Link } from 'remix'
import { Layout } from '~/components'

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
      <div className="container">
        <div className="hero">
          <div className="hero-photo">
            <img
              className="avatar"
              src="/images/avatar.jpg"
              alt="San Sebastian"
            />
          </div>
          <div className="hero-intro">
            <h1 className="hero-intro-heading">
              I’m <span className="hero-intro-name">San Sebastian</span>,
              writing some code to impress people
            </h1>
            <div className="hero-social-media-icons">
              <a href="https://github.com/sanBastia" target="_blank">
                <img
                  className="icon-github"
                  src="/images/icon-github.svg"
                  alt="GitHub"
                />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img
                  className="icon-twitter"
                  src="/images/icon-twitter.svg"
                  alt="Twitter"
                />
              </a>
              <a href="https://www.linkedin.com/in/sanbastia/" target="_blank">
                <img
                  className="icon-linkedin"
                  src="/images/icon-linkedin.svg"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="subnavigation">
          <div className="subnavigation-wrapper">
            <img
              className="icon-pencil"
              src="/images/react-icons/ai/icon-pencil-gray.svg"
              alt="pencil"
            />
            <p className="subnavigation-text-active">Writing</p>
          </div>
          <div className="subnavigation-wrapper">
            <img
              className="icon-laptop"
              src="/images/react-icons/ai/icon-laptop.svg"
              alt="laptop"
            />
            <p className="subnavigation-text">Works</p>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="article">
          <div className="article-content">
            <div className="article-content-title">
              <h1>Mari kita bahas destructuring</h1>
            </div>
            <div className="article-content-readtime">
              <span>28 Feb 2022</span>
              <span>
                <img
                  className="coffee"
                  src="/images/icon-coffee.svg"
                  alt="coffee"
                />{' '}
                5 minute read
              </span>
            </div>
            <div className="article-content-post">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quisquam molestias facere saepe quas dicta at eum
                cumque. Dolorem sint saepe dignissimos fugit esse a molestiae
                cumque ullam autem nam.
              </p>
            </div>
          </div>
        </div>
        <div className="article">
          <div className="article-content">
            <div className="article-content-title">
              <h1>Tiga titik dalam javascript</h1>
            </div>
            <div className="article-content-readtime">
              <span>01 Jan 2022</span>
              <span>
                <img
                  className="coffee"
                  src="/images/icon-coffee.svg"
                  alt="coffee"
                />{' '}
                5 minute read
              </span>
            </div>
            <div className="article-content-post">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quisquam molestias facere saepe quas dicta at eum
                cumque. Dolorem sint saepe dignissimos fugit esse a molestiae
                cumque ullam autem nam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
