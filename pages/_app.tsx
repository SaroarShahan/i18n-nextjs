import type { AppProps } from 'next/app'
import { appWithI18Next, useSyncLanguage } from 'ni18n'

import { ni18nConfig } from '../ni18n.config'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const locale = typeof window !== 'undefined' &&  window.localStorage.getItem('MY_LANGUAGE') || '';

  useSyncLanguage(locale)


  return <Component {...pageProps} />
}

export default appWithI18Next(App, ni18nConfig)