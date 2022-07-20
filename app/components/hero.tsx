import { FunctionComponent } from 'react'
import { Divider, SubNavigation, KitwindHero } from '~/components'

interface HeroProps {
  children?: React.ReactNode
}

export const Hero: FunctionComponent<HeroProps> = ({ children }) => {
  return (
    <>
      <div className="hero-intro">
        <div className="hero-social-media-icons">
          <a href="https://github.com/sanBastia" target="_blank">
            <img
              className="icon-github"
              src="/images/icon-github.svg"
              alt="GitHub"
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              className="icon-twitter"
              src="/images/icon-twitter.svg"
              alt="Twitter"
            />
          </a>
          <a href="https://www.linkedin.com/in/sanbastia/" target="_blank">
            <img
              className="icon-linkedin"
              src="/images/icon-linkedin.svg"
              alt="Linkedin"
            />
          </a>
        </div>
      </div>
      <SubNavigation />
      <Divider />
    </>
  )
}

export default Hero
