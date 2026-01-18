import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Infinity Hyperloop Logo" className="logo-image" />
        </Link>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/team" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Team</Link>
          </li>
          <li className="navbar-item">
            <Link to="/verticals" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Verticals</Link>
          </li>
          <li className="navbar-item">
            <Link to="/events" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Events</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

