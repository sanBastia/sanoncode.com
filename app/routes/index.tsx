import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import { Button } from "@mantine/core";

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
      <main>
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
              I’m San Sebastian, writing some code to impress people
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
      </main>
    </div>
  );
}
