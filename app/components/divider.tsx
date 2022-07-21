import { FunctionComponent } from 'react'

interface DividerProps {}

export const Divider: FunctionComponent<DividerProps> = () => {
  return <div className="divide-y-8 divide-dashed divide-gray-200" />
}

export default Divider
