import { FunctionComponent } from 'react'
import { Link, useLocation } from '@remix-run/react'
import { BsPencil, BsLaptop } from 'react-icons/bs'

interface MainNavigationProps {}

export const MainNavigation: FunctionComponent<MainNavigationProps> = () => {
  const location = useLocation()
  const { pathname } = location

  const MainNavigationLinks = [
    {
      to: '/',
      text: 'Writing',
    },
    {
      to: '/projects',
      text: 'Projects',
    },
  ]

  return (
    <header className="h-24 sm:h-32 flex items-center w-full mx-auto lg:max-w-screen-lg">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="capitalize text-black flex items-center">
          <Link to="/">
            <img
              src="./images/scbrand.png"
              className="h-24 w-24"
              alt="scbrand"
            />
            {/* <span className="text-xl text-blue-900 md:text-4xl ml-3 mt-1 font-bold">
              sanoncode
            </span> */}
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="capitalize text-lg md:text-xl flex flex-row justify-start">
            <a
              href="#projects"
              className="px-2 flex text-black hover:text-blue-900"
            >
              Projects
            </a>
            <a
              href="#writings"
              className="px-2 flex text-black hover:text-blue-900"
            >
              Writings
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MainNavigation
