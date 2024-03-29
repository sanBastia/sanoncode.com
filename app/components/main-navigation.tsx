import { FunctionComponent, useState } from 'react'
import { Link, useLocation } from '@remix-run/react'
import { Theme, useTheme } from '~/utils/theme-provider'
import { GlassWater, Sun, Moon } from 'lucide-react'
import useSound from 'use-sound'
import switchSound from '../../public/sounds/switchsound.mp3'

interface MainNavigationProps {}

export const MainNavigation: FunctionComponent<MainNavigationProps> = () => {
  const [theme, setTheme] = useTheme()
  const [play] = useSound(switchSound)

  const MainNavigationLinks = [
    {
      link: '/writings',
      title: 'Writings',
    },
    {
      link: '/projects',
      title: 'Projects',
    },
  ]
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    )
    play()
  }

  return (
    <header className="h-24 sm:h-32 flex items-center w-full mx-auto lg:max-w-screen-lg">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="capitalize text-black flex items-center">
          <Link to="/">
            {/* <img
              src="./images/scbrand.svg"
              className=" h-20 w-20 lg:h-24 lg:w-24"
              alt="scbrand"
            /> */}
            <GlassWater
              className="text-gray-900 dark:text-textDark"
              size={32}
            />
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="capitalize text-sm md:text-xl flex flex-row justify-start gap-2 items-center">
            {MainNavigationLinks.map((item)=>{
              return (
                <Link
                key={item.title}
                to={item.link}
                className="px-2 flex text-[#202945] hover:text-blue-900  dark:text-white"
              >
                {item.title}
              </Link>
              )
            })}
      
            <button onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Sun className="text-gray-900 dark:text-textDark" size={28} />
              ) : (
                <Moon className="text-gray-900 dark:text-textDark" size={28} />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MainNavigation
