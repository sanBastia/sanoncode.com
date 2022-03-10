import { FunctionComponent } from 'react'

interface SubNavigationProps {}

export const SubNavigation: FunctionComponent<SubNavigationProps> = () => {
  return (
    <div className="subnavigation">
      <div className="subnavigation-wrapper">
        <img
          className="icon-pencil"
          src="/images/react-icons/ai/icon-pencil-gray.svg"
          alt="pencil"
        />
        <h3 className="subnavigation-text-active">Writing</h3>
      </div>
      <div className="subnavigation-wrapper">
        <img
          className="icon-laptop"
          src="/images/react-icons/ai/icon-laptop.svg"
          alt="laptop"
        />
        <h3 className="subnavigation-text">Works</h3>
      </div>
    </div>
  )
}

export default SubNavigation
