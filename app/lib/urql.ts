import { createClient } from '@urql/core'

export const graphcmsClient = createClient({
  url: 'https://api-ap-southeast-2.graphcms.com/v2/cl0qdbz7w9xqm01xk2nov0uzm/master',
})

//  process.env.GRAPHCMS_ENDPOINT as string,
