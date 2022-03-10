import { FunctionComponent } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <main className="layout">{children}</main>
}

export default Layout
