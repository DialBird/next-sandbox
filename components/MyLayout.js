import { useContext } from 'react';

import AuthContext, { AuthProvider } from '../contexts/AuthContext';

import Header from './Header';

const Layout = props => (
  <AuthProvider>
    <Header />
    <div className='container'>
      {props.children}
    </div>
  </AuthProvider>
);

export default Layout;
