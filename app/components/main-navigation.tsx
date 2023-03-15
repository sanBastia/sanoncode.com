import { FunctionComponent } from 'react'
import { Link, useLocation } from '@remix-run/react'
import { Theme, useTheme } from '~/utils/theme-provider'

interface MainNavigationProps {}

export const MainNavigation: FunctionComponent<MainNavigationProps> = () => {
  const location = useLocation()
  const { pathname } = location
  const [, setTheme] = useTheme()

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
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    )
  }

  return (
    <header className="h-24 sm:h-32 flex items-center w-full mx-auto lg:max-w-screen-lg">
      <div className="container mx-auto px-2 lg:px-6 flex items-center justify-between">
        <div className="capitalize text-black flex items-center">
          <Link to="/">
            <img
              src="./images/scbrand.png"
              className=" h-20 w-20 lg:h-24 lg:w-24"
              alt="scbrand"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="capitalize text-sm md:text-xl flex flex-row justify-start">
            <Link
              to="#projects"
              className="px-2 flex text-black hover:text-blue-900"
            >
              Projects
            </Link>
            <Link
              to="#writings"
              className="px-2 flex text-black hover:text-blue-900"
            >
              Writings
            </Link>
            <button onClick={toggleTheme}>Toggle</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MainNavigation
