import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs",
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs",
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d",
      },
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions",
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading",
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries",
      },
    ],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Sanoncode",
    description: "San Sebastian personal website",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main className="container">
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
            <p className="subnavigation-text">Writing</p>
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
              <span>1 Jan 2022</span>
              <span>
                <img
                  className="coffee"
                  src="/images/icon-coffee.svg"
                  alt="coffee"
                />{" "}
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
              <span>01 Feb 2022</span>
              <span>
                <img
                  className="coffee"
                  src="/images/icon-coffee.svg"
                  alt="coffee"
                />{" "}
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
      </main>
    </div>
  );
}
