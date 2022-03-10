import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface SubNavigationProps {}

export const SubNavigation: FunctionComponent<SubNavigationProps> = () => {
  return (
    <div className="subnavigation">
      <Link to="/" className="subnavigation-link">
        <img
          className="icon-pencil"
          src="/images/react-icons/ai/icon-pencil-gray.svg"
          alt="pencil"
        />
        <h3 className="subnavigation-text-active">Writing</h3>
      </Link>
      <Link to="/projects" className="subnavigation-link">
        <img
          className="icon-laptop"
          src="/images/react-icons/ai/icon-laptop.svg"
          alt="laptop"
        />
        <h3 className="subnavigation-text">Projects</h3>
      </Link>
    </div>
  )
}

export default SubNavigation
