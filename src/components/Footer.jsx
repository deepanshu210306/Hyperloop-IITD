import logo from './logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-section footer-about">
              <img src={logo} alt="Infinity Hyperloop Logo" className="footer-logo" />
              <p className="footer-description">
                Pioneering the future of transportation at IIT Delhi
              </p>
            </div>
            <div className="footer-section footer-links-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/verticals">Verticals</a></li>
                <li><a href="/events">Events</a></li>
              </ul>
            </div>
            <div className="footer-section footer-contact">
              <h4 className="footer-heading">Contact Info</h4>
              <div className="contact-item">
                <span className="contact-label">Address:</span>
                <p className="footer-text">
                  Lab 244-B, V Block, CART Head office,<br />
                  Indian Institute of Technology Delhi,<br />
                  Hauzkhas 110016
                </p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+919919511149" className="footer-link">
                  +91 9919511149
                </a>
              </div>
            </div>
            <div className="footer-section footer-social-section">
              <h4 className="footer-heading">Follow Us</h4>
              <div className="footer-social">
                <a href="https://www.linkedin.com/company/infinity-hyperloop/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                <a href="https://www.instagram.com/infinity_hyperloop/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              </div>
              <div className="contact-item" style={{ marginTop: '1rem' }}>
                <span className="contact-label">Email:</span>
                <a href="mailto:infinityhyperloop@iitd.ac.in" className="footer-link">
                  infinityhyperloop@iitd.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Infinity Hyperloop, IIT Delhi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

