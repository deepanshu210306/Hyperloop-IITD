import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AlumniPage.css'

// TODO: Add alumni photos when available
// Former team members moved to Alumni section per document instructions

const alumni = [
  {
    name: 'Yojana Bansal',
    image: null, // TODO: Add photo
    linkedin: null, // TODO: Add LinkedIn URL if available
  },
  {
    name: 'Adarsh Soni',
    image: null, // TODO: Add photo
    linkedin: null, // TODO: Add LinkedIn URL if available
  },
  {
    name: 'Chirag Kansal',
    image: null, // TODO: Add photo
    linkedin: null, // TODO: Add LinkedIn URL if available
  },
  {
    name: 'Riya Arora',
    image: null, // TODO: Add photo
    linkedin: null, // TODO: Add LinkedIn URL if available
  },
]

const AlumniCard = ({ member }) => {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="alumni-member-card">
      <div className="alumni-image-wrapper">
        {member.image ? (
          <img src={member.image} alt={member.name} className="alumni-image" />
        ) : (
          <div className="alumni-image-placeholder">{initials}</div>
        )}
      </div>
      <h3 className="alumni-name">{member.name}</h3>
      <div className="alumni-social-links">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="alumni-social-icon-link linkedin"
            aria-label={`${member.name} LinkedIn`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

const AlumniPage = () => {
  return (
    <div className="alumni-page">
      <div className="alumni-hero">
        <Navbar />
        <div className="alumni-hero-overlay"></div>
        <div className="alumni-hero-content">
          <h1 className="alumni-hero-title">Alumni</h1>
          <p className="alumni-hero-subtitle">
            Honoring the former members who built the foundation of Infinity Hyperloop
          </p>
        </div>
      </div>

      <section className="alumni-section">
        <div className="alumni-section-container">
          <h2 className="alumni-section-title">Former Team Members</h2>
          <div className="alumni-grid">
            {alumni.map((member, index) => (
              <AlumniCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AlumniPage
