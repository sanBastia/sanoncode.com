import { FunctionComponent } from 'react'
import { Link } from 'remix'
import { BsPencil, BsLaptop } from 'react-icons/bs'

interface SubNavigationProps {}

export const SubNavigation: FunctionComponent<SubNavigationProps> = () => {
  return (
    <div className="subnavigation">
      <Link to="/" className="subnavigation-link active">
        <BsPencil />
        <span>Writing</span>
      </Link>
      <Link to="/projects" className="subnavigation-link">
        <BsLaptop />
        <span>Projects</span>
      </Link>
    </div>
  )
}

export default SubNavigation
