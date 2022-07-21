import { FunctionComponent } from 'react'
import Divider from './divider'

interface HeroProps {
  children?: React.ReactNode
}

export const Hero: FunctionComponent<HeroProps> = ({ children }) => {
  return (
    <>
      <div className="flex relative items-center mx-auto lg:max-w-screen-lg">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
          <div className="flex">
            <img
              src="/images/avatar.jpg"
              className="rounded-full h-32 w-32 mx-auto"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-5xl mt-6 mb-2 font-bold text-center text-black">
              Hi, I&#x27;m San Sebastian 🤘
            </h1>
            <p className="text-lg md:text-3xl mx-auto text-center py-2 text-gray-600">
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
      <Divider />
    </>
  )
}

export default Hero
