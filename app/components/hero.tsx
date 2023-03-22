import { FunctionComponent } from 'react'
import { Linkedin, Github, Link } from 'lucide-react'

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
          <div className="flex flex-col mb-4">
            <h1 className="text-2xl md:text-5xl mt-6 mb-2 font-bold text-center text-gray-900 dark:text-textDark">
              Hi, I&#x27;m San Sebastian 🤘
            </h1>
            <p className="text-lg md:text-3xl mx-auto text-center py-2 text-gray-600 dark:text-[#cbe4de8f]">
              Building digital products, brands, and experiences.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/sanBastia" target="_blank">
              <Github className="text-gray-900 dark:text-textDark" size={24} />
            </a>

            <a href="https://www.linkedin.com/in/sanbastia/" target="_blank">
              <Linkedin
                className="text-gray-900 dark:text-textDark"
                size={24}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
