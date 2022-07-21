import { FunctionComponent } from 'react'
import Divider from './divider'

interface ProjectCardProps {}

export const ProjectCard: FunctionComponent<ProjectCardProps> = () => {
  return (
    <>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <img
              className="object-cover w-full h-28 rounded md:h-58 xl:h-40 border-b"
              src="./images/fujiboxlogo.png"
              alt=""
            />

            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                {/* <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-red-50 lg:mb-0">
                  <svg
                    className="w-8 h-8 text-blue-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div> */}
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
          {/* <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-red-50 lg:mb-0">
                  <svg
                    className="w-8 h-8 text-blue-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5">
                  Smooth as an android
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-blue-900 text-blue-900"
              >
                Learn more
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <Divider />
    </>
  )
}

export default ProjectCard
