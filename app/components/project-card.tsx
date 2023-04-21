import { Link } from '@remix-run/react'
import { FunctionComponent } from 'react'
import SubHeading from './sub-heading'

interface ProjectCardProps {}

export const ProjectCard: FunctionComponent<ProjectCardProps> = () => {
  return (
    <section id="projects">
      <SubHeading
        title="Projects"
        excerpt="Things that i build and maintain some of them until now"
      />
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-4 ">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <img
              className="object-cover w-full rounded border-b"
              src="./images/fujibox-pesanankhusus.png"
              alt="fujibox-pesanan-khusus"
            />

            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <h6 className="font-semibold leading-5 dark:text-black">
                  Pesanan Khusus dari Fujibox
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                customade box service by Fujibox that help brands or retails in printing and packaging needs
                </p>
              <a
                href="https://pesanankhusus.fujiboxglobal.com"
                target="_BLANK"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-blue-900"
              >
                Take a look
              </a>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <img
              className="object-cover w-full rounded border-b h-32"
              src="./images/fujibox-lgcy.png"
              alt="fujibox-legacy"
            />

            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <h6 className="font-semibold leading-5 dark:text-black">
                  Fujibox Legacy
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                A semi-commerce by Fujibox that sell packaging product for retails in baking industry
              </p>
              <a
                href="https://legacy.fujiboxglobal.com"
                target="_BLANK"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-blue-900"
              >
                Take a look
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
