import '../styles/global.scss';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/ThemeContext';
import 'regenerator-runtime/runtime'


export default function App({ Component, pageProps }: AppProps) {
  

  return (
  <ThemeProvider>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}
