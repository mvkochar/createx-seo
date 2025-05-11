import './Header.css'

const Header = () => {
  return (
    <div className='header d-f jc-sb align-center'>
      <div className="d-f">
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
          <ul className="header-nav d-f">
            <li className="header-nav-item"><a href="">Services</a></li>
            <li className="header-nav-item"><a href="">Case Studies</a></li>
            <li className="header-nav-item"><a href="">About Us</a></li>
            <li className="header-nav-item"><a href="">Blog</a></li>
            <li className="header-nav-item"><a href="">Contacts</a></li>
          </ul>
        </nav>
      </div>
      <a href="" className="header-talk">Talk to a human</a>
    </div>
  )
}

export default Header