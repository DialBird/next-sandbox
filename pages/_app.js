import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from '../contexts/AuthContext';
import Header from '../components/Header';

export default ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Header />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  )
}
