import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AboutPage.css'

// Professor images
import profKrishna from '../components/assets/professors/prof krishna.png'
import profSumitP from '../components/assets/professors/Prof. Sumit P.png'
import profSunilJha from '../components/assets/professors/Prof. Sunil Jha.png'
import profDDasgupta from '../components/assets/professors/Prof. D. Dasgupta.png'
import profKrishanKant from '../components/assets/professors/Prof. Krishan kant.png'

const professors = [
  { name: 'Prof. Krishna', image: profKrishna },
  { name: 'Prof. Sumit P.', image: profSumitP },
  { name: 'Prof. Sunil Jha', image: profSunilJha },
  { name: 'Prof. D. Dasgupta', image: profDDasgupta },
  { name: 'Prof. Krishan Kant', image: profKrishanKant },
]

const achievements = [
  'Best Levitation & Stabilization Award — GHC 2026, IIT Madras',
  'Best Club Award — IIT Delhi, 2024',
  'Research Paper — EMS Levitation',
  'Achieved stable levitation, showcased at GHC IIT-M 2026',
]

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <Navbar />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">Meet the minds behind Infinity Hyperloop</p>
        </div>
      </div>

      {/* About Content Section */}
      <section className="about-content-section">
        <div className="section-container">
          <div className="about-text-content">
            <p className="about-paragraph">
              We are a team of 25+ zealous undergraduate engineers from across disciplines at IIT Delhi, working together to reimagine transportation through Hyperloop, the fifth mode of transportation.
            </p>
            <p className="about-paragraph">
              Our team strives to blend technical acumen with focus on diligence, discipline and perseverance to drive innovation using the Triple Helix model, where we continuously work on exchange of interdisciplinary knowledge from academia to meet the needs of industry with the support of government. Having achieved levitation recently that our team showcased at GHC IIT-M 2026, we are committed to develop an autonomous scalable pod and develop associated innovation technologies to facilitate the commercialization of the hyperloop system.
            </p>
            <p className="about-paragraph">
              We are based in the State of the Art Research & Innovation Park, IIT Delhi. Having won the best club award for the year 2024, we invite tech enthusiasts ready to take the hyperloop industry to the level of industrial roll out. We are handheld by a team of experienced faculty advisors, and innovative engineers prepared to take transportation technology to new heights.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="section-container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card">
                <span className="achievement-icon">🏆</span>
                <p className="achievement-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professors Section */}
      <section className="professors-section">
        <div className="section-container">
          <h2 className="section-title">Faculty Advisors</h2>
          <div className="professors-grid">
            {professors.map((prof, index) => (
              <div className="professor-card" key={index}>
                <div className="professor-image-wrapper">
                  <img src={prof.image} alt={prof.name} className="professor-image" />
                </div>
                <h3 className="professor-name">{prof.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="connect-section">
        <div className="section-container">
          <h2 className="section-title">Connect With Us</h2>
          <div className="connect-links">
            <a
              href="https://www.instagram.com/infinity_hyperloop/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-card"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/infinity-hyperloop/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-card"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:infinityhyperloop@admin.iitd.ac.in"
              className="connect-card"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
