import Link from 'next/link';

const Header = () => (
  <div className='navbar navbar-expand-lg navbar-light bg-light'>
    <div class="container">
      <a className="navbar-brand" href="/">Next Sample</a>
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
    </div>
  </div>
)

export default Header
