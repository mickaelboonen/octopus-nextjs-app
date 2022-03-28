import '../styles/reset.css'
// import { AppStateProvider } from './my-context'

export default function MyApp({ Component, pageProps }) {
  return (
    // <AppStateProvider>
      <Component {...pageProps} />
    // </AppStateProvider>
  )
}