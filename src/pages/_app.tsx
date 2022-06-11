import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { customTheme } from '@/styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={customTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default App
