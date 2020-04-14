import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from '../contexts/AuthContext';
import Header from '../components/Header';

export default ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>My Next</title>
      </Head>
      <AuthProvider>
        <Header />
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </React.Fragment>
  )
}
