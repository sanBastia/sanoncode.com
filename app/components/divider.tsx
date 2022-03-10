import { FunctionComponent } from 'react'

interface DividerProps {}

export const Divider: FunctionComponent<DividerProps> = () => {
  return <hr className="horizontal-line" />
}

export default Divider
