import { useContext } from 'react';
import Link from 'next/link';

import AuthContext from '../contexts/AuthContext';

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const renderBeforeLoginNavs = () => (
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <Link href="/login">
          <a className='nav-link'>LogIn</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a className='nav-link'>SignUp</a>
        </Link>
      </li>
    </ul>
  );

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
      <div className="container">
        <a className="navbar-brand" href="/">Next Sample</a>
        {currentUser ? renderNavs() : renderBeforeLoginNavs()}
      </div>
    </div>
  );
}

export default Header
