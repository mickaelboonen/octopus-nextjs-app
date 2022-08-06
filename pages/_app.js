import '../styles/reset.css'
// import { AppStateProvider } from './my-context'
import { Provider } from 'react-redux';
import store from './../app/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}