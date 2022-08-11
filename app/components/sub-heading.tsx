import { FunctionComponent } from 'react'

interface SubHeadingProps {
  title: string
  excerpt: string
}

export const SubHeading: FunctionComponent<SubHeadingProps> = ({
  title,
  excerpt,
}) => {
  return (
    <div className="mx-auto lg:max-w-screen-lg">
      <h1 className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4 text-left text-2xl lg:text-3xl scroll-smooth">
        {title}
      </h1>
      <p className="px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-sm lg:text-lg mx-auto lg:text-left text-gray-600">
        {excerpt}
      </p>
    </div>
  )
}

export default SubHeading
