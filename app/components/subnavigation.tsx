import { FunctionComponent } from 'react'
import { Link, useLocation } from 'remix'
import { BsPencil, BsLaptop } from 'react-icons/bs'

interface SubNavigationProps {}

export const SubNavigation: FunctionComponent<SubNavigationProps> = () => {
  const location = useLocation()
  const { pathname } = location

  const subnavigationLinks = [
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
    <div className="subnavigation">
      <Link
        to="/"
        className={`subnavigation-link ${pathname === '/' && 'active'}`}
      >
        <BsPencil />
        <span>Writing</span>
      </Link>
      <Link
        to="/projects"
        className={`subnavigation-link ${pathname === '/projects' && 'active'}`}
      >
        <BsLaptop />
        <span>Projects</span>
      </Link>
    </div>
  )
}

export default SubNavigation
