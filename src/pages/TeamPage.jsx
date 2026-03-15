import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './TeamPage.css'

// Team images
import jairam from '../components/assets/team/jairam.jpeg'
import tejasChitale from '../components/assets/team/Tejas Chitale.jpeg'
import deveshMeena from '../components/assets/team/Devesh Meena.jpg'
import mukeshThombare from '../components/assets/team/Mukesh Thombare.jpeg'
import nishantChauhan from '../components/assets/team/nishant_chauhan.jpeg'
import ranaRituraj from '../components/assets/team/rana_rituraj.jpg'
import mdAbubakar from '../components/assets/team/md_abubakar.jpg'
import priyanshuSharma from '../components/assets/team/priyanshu_sharma.png'
import vishalMalik from '../components/assets/team/vishal_malik.png'
import harpreetDhiman from '../components/assets/team/Harpreet_Dhiman.png'
import sagarYadav from '../components/assets/team/sagar_yadav.jpg'
import ujjawalKumar from '../components/assets/team/ujjwal_kumar.png'
import wasimRaja from '../components/assets/team/wasim_raja.png'

const electricalTeam = [
  {
    name: 'Abubakar Md Abubakar',
    image: mdAbubakar,
    linkedin: 'https://www.linkedin.com/in/md-abubakar484/',
  },
  {
    name: 'Priyanshu S.',
    image: priyanshuSharma,
    linkedin: 'https://www.linkedin.com/in/priyanshusharmaog/',
  },
  {
    name: 'Ujjawal Kumar',
    image: ujjawalKumar,
    linkedin: 'https://www.linkedin.com/in/ujjwal-kumar-364347173/',
  },
]

const businessTeam = [
  {
    name: 'Tejas Chitale',
    image: tejasChitale,
    linkedin: 'https://www.linkedin.com/in/tejas-chitale-49b36a253/',
  },
  {
    name: 'Devesh Meena',
    image: deveshMeena,
    linkedin: 'https://www.linkedin.com/in/mdevesh-iitd/',
  },
  {
    name: 'Mukesh Thombare',
    image: mukeshThombare,
    linkedin: 'https://www.linkedin.com/in/mukeshthombare/',
  },
  {
    name: 'Nishant Chauhan',
    image: nishantChauhan,
    linkedin: 'https://www.linkedin.com/in/chauhan--nishant/',
  },
  {
    name: 'Rana Rituraj',
    image: ranaRituraj,
    linkedin: 'https://www.linkedin.com/in/rana-rituraj-a2ba91b6/',
  },
]

const mechanicalTeam = [
  {
    name: 'Vishal Malik',
    image: vishalMalik,
    linkedin: 'https://www.linkedin.com/in/vishal-malik-0a835315b/',
  },
  {
    name: 'Harpreet Dhiman',
    image: harpreetDhiman,
    linkedin: 'https://www.linkedin.com/in/harpreet-d-530699116/',
  },
  {
    name: 'Sagar Yadav',
    image: sagarYadav,
    linkedin: 'https://www.linkedin.com/in/sagar-yadav-391735306/',
  },
  {
    name: 'Wasim Raja',
    image: wasimRaja,
    imagePosition: 'center 30%',
    linkedin: 'https://www.linkedin.com/in/wasimrajakp/',
  },
]

const MemberCard = ({ member, isOC = false }) => {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <div className={`team-member-card ${isOC ? 'oc-card' : ''}`}>
      <div className="member-image-wrapper">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="member-image"
            style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
          />
        ) : (
          <div className="member-image-placeholder">{initials}</div>
        )}
      </div>
      <h3 className="member-name">{member.name}</h3>
      <div className="member-social-links">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link linkedin"
            aria-label={`${member.name} LinkedIn`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
        <a
          href="https://www.instagram.com/infinity_hyperloop/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link instagram"
          aria-label="Infinity Hyperloop Instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href="mailto:infinityhyperloop@admin.iitd.ac.in"
          className="social-icon-link email"
          aria-label="Infinity Hyperloop Email"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

const TeamSection = ({ title, members }) => (
  <div className="team-subsection">
    <h2 className="subsection-title">{title}</h2>
    <div className="team-grid">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  </div>
)

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

      <section className="team-section">
        <div className="section-container">
          {/* Overall Coordinator */}
          <div className="team-subsection">
            <h2 className="subsection-title">Overall Coordinator</h2>
            <div className="oc-container">
              <MemberCard
                member={{
                  name: 'Jairam G',
                  image: jairam,
                  linkedin: 'https://www.linkedin.com/in/jairam-gnanavadivel-665176250/',
                }}
                isOC
              />
            </div>
          </div>

          <TeamSection title="Electrical Vertical" members={electricalTeam} />
          <TeamSection title="Mechanical Vertical" members={mechanicalTeam} />
          <TeamSection title="Business & Operations" members={businessTeam} />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TeamPage
