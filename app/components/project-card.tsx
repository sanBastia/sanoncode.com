import { FunctionComponent } from 'react'
import Divider from './divider'
import SubHeading from './sub-heading'

interface ProjectCardProps {}

export const ProjectCard: FunctionComponent<ProjectCardProps> = () => {
  return (
    <div>
      <SubHeading
        title="Projects"
        excerpt="Things that i build and maintain some of them until now"
      />
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full mx-auto lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-4">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <img
              className="object-cover w-full h-28 rounded md:h-58 xl:h-40 border-b"
              src="./images/fujiboxlogo.png"
              alt=""
            />

            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <h6 className="font-semibold leading-5">Fujibox</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                A semi-commerce website for packaging company
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-blue-900 text-blue-900"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
