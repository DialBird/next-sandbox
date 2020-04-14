import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from '../contexts/AuthContext';

export default ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
