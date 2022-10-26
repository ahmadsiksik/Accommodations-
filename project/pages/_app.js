import { AuthContextProvider } from '../component/Login&Signin/Auth-context'
import { BrowserRouter } from 'react-router-dom';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return(
  <AuthContextProvider>

  <Component {...pageProps} />
  </AuthContextProvider>
  )
}

export default MyApp
