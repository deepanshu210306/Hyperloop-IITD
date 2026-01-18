import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './TeamPage.css'

// Team images
// Note: Files may need to be renamed to match these imports:
// - jairam.jpeg → jairam.png
// - Devesh Meena.jpg → Devesh Meena.png
import jairam from '../components/jairam.jpeg'
import tejasChitale from '../components/Tejas Chitale.jpeg'
import deveshMeena from '../components/Devesh Meena.jpg'
import mukeshThombare from '../components/Mukesh Thombare.jpeg'

const businessTeam = [
  { name: 'Tejas Chitale', image: tejasChitale, designation: 'Head' },
  { name: 'Devesh Meena', image: deveshMeena, designation: 'Coordinator' },
  { name: 'Mukesh Thombare', image: mukeshThombare, designation: '' },
]

const TeamPage = () => {
  return (
    <div className="team-page">
      <div className="team-hero">
        <Navbar />
        <div className="team-hero-overlay"></div>
        <div className="team-hero-content">
          <h1 className="team-hero-title">Our Team</h1>
          <p className="team-hero-subtitle">Meet the passionate minds driving Infinity Hyperloop</p>
        </div>
      </div>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          {/* Overall Coordinator Section */}
          <div className="team-subsection">
            <h2 className="subsection-title">Overall Coordinator</h2>
            <div className="oc-container">
              <div className="team-member-card oc-card">
                <div className="member-image-wrapper">
                  <img src={jairam} alt="Jairam G" className="member-image" />
                </div>
                <h3 className="member-name">Jairam G</h3>
                <a 
                  href="https://www.linkedin.com/in/jairam-gnanavadivel-665176250/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="member-linkedin"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Business & Operations Vertical */}
          <div className="team-subsection">
            <h2 className="subsection-title">Business & Operations</h2>
            <div className="team-grid">
              {businessTeam.map((member, index) => (
                <div className="team-member-card" key={index}>
                  <div className="member-image-wrapper">
                    <img src={member.image} alt={member.name} className="member-image" />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  {member.designation && (
                    <span className="member-designation">({member.designation})</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mechanical Vertical */}
          <div className="team-subsection">
            <h2 className="subsection-title">Mechanical Vertical</h2>
            <div className="team-grid">
              {/* Add team members here when available */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TeamPage
