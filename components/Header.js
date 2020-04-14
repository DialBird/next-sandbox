import { useContext } from 'react';
import Link from 'next/link';

import AuthContext from '../contexts/AuthContext';

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const renderNavs = () => (
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <Link href="/">
          <a className='nav-link'>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className='nav-link'>About</a>
        </Link>
      </li>
      <li>
        <Link href="/quote">
          <a className='nav-link'>Quote</a>
        </Link>
      </li>
    </ul>
  )

  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
      <div class="container">
        <a className="navbar-brand" href="/">Next Sample</a>
        {currentUser && renderNavs()}
      </div>
    </div>
  );
}

export default Header
