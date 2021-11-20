import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'
import Navigation from '../components/navigation'
import Layout from '../components/layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navigation />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
