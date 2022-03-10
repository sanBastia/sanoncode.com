import { FunctionComponent } from 'react'

interface HeroProps {
  children?: React.ReactNode
}

export const Hero: FunctionComponent<HeroProps> = ({ children }) => {
  return (
    <div className="hero">
      <div className="hero-photo">
        <img className="avatar" src="/images/avatar.jpg" alt="San Sebastian" />
      </div>
      <div className="hero-intro">
        <h1 className="hero-intro-heading">
          I’m <span className="hero-intro-name">San Sebastian</span>, writing
          some code to impress people
        </h1>
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
    </div>
  )
}

export default Hero
