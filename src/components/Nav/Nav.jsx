import './nav.scss'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className="container">
        <ul className='nav-item'>
          <li className='nav-list'><a href="#1">New Games</a></li>
          <li className='nav-list'><a href="#2">Story games</a></li>
          <li className='nav-list'><a href="#3">Simulators</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;