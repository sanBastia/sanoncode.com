import { hydrate } from 'react-dom'
import { RemixBrowser } from "@remix-run/react";

import { splitbee } from './lib'

hydrate(<RemixBrowser />, document)

export const isEnvProduction = ENV?.NODE_ENV === 'production'
export const isSameHostName = window.location.hostname === 'sanoncode.com'
export const isProductionAllowed = isEnvProduction && isSameHostName

if (isProductionAllowed) {
  splitbee.init()
}
