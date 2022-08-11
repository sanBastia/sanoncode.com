import { FunctionComponent } from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Container
