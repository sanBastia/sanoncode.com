import { createCookieSessionStorage } from '@remix-run/node'

import { Theme, isTheme } from './theme-provider'

const sessionSecret = process.env.SANONCODE_SECRET_KEY
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: '_sanoncode_session',
    secure: true,
    secrets: [String(sessionSecret)],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
})

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'))
  return {
    getTheme: () => {
      const themeValue = session.get('theme')
      return isTheme(themeValue) ? themeValue : 'light'
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  }
}

export { getThemeSession }
