import { FunctionComponent } from 'react'

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright 2022 San Sebastian. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0 mx-auto lg:mx-0">
            <a href="https://github.com/sanBastia" target="_blank">
              <img src="/images/icon-github.svg" alt="GitHub" />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img src="/images/icon-twitter.svg" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/sanbastia/" target="_blank">
              <img src="/images/icon-linkedin.svg" alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
