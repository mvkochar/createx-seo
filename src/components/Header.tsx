import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header d-f jc-sb align-center'>
      <div className="d-f">
        <div><Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link></div>
        <nav>
          <ul className="header-nav d-f">
            <li className="header-nav-item"><Link to="/services">Services</Link></li>
            <li className="header-nav-item"><Link to="/case-studies">Case Studies</Link></li>
            <li className="header-nav-item"><Link to="/about">About Us</Link></li>
            <li className="header-nav-item"><Link to="/blog">Blog</Link></li>
            <li className="header-nav-item"><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>
      </div>
      <a href="" className="header-talk">Talk to a human</a>
    </div>
  )
}

export default Header