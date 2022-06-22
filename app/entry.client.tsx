import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'

import { splitbee } from './lib/splitbee'

hydrate(<RemixBrowser />, document)

splitbee.init()
