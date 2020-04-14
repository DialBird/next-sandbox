import { useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';

import AuthContext from '../contexts/AuthContext';
import Header from '../components/Header';

const Index = props => {
  return (
    <React.Fragment>
      <h2>Home</h2>
    </React.Fragment>
  );
}

// Index.getInitialProps = async ({ res }) => {
//   const { currentUser } = useContext(AuthContext);
//
//   if (currentUser) {
//     res.writeHead(302, { Location: '/dashboard' });
//     res.end();
//   }
//   return {};
// }

export default Index;
