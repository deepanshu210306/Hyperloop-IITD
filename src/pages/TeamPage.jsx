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
import vishalMalik from '../components/assets/team/vishal_malik.jpg'
import harpreetDhiman from '../components/assets/team/Harpreet_Dhiman.png'
import sagarYadav from '../components/assets/team/sagar_yadav.jpg'

const electricalTeam = [
  {
    name: 'Abubakar Md Abubakar',
    image: mdAbubakar,
    designation: '',
    linkedin: 'https://www.linkedin.com/in/md-abubakar484/',
  },
  {
    name: 'Priyanshu S.',
    image: priyanshuSharma,
    designation: 'Levitation & Control',
    linkedin: 'https://www.linkedin.com/in/priyanshusharmaog/',
  },
  {
    name: 'Ujjawal Kumar',
    image: null,
    designation: 'Battery Pack Design',
    linkedin: 'https://www.linkedin.com/in/ujjwal-kumar-364347173/',
  },
]

const businessTeam = [
  {
    name: 'Tejas Chitale',
    image: tejasChitale,
    designation: 'Head',
    linkedin: 'https://www.linkedin.com/in/tejas-chitale-49b36a253/',
  },
  {
    name: 'Devesh Meena',
    image: deveshMeena,
    designation: 'Coordinator',
    linkedin: 'https://www.linkedin.com/in/mdevesh-iitd/',
  },
  {
    name: 'Mukesh Thombare',
    image: mukeshThombare,
    designation: '',
    linkedin: 'https://www.linkedin.com/in/mukeshthombare/',
  },
  {
    name: 'Nishant Chauhan',
    image: nishantChauhan,
    designation: '',
    linkedin: 'https://www.linkedin.com/in/chauhan--nishant/',
  },
  {
    name: 'Rana Rituraj',
    image: ranaRituraj,
    designation: '',
    linkedin: 'https://www.linkedin.com/in/rana-rituraj-a2ba91b6/',
  },
]

const mechanicalTeam = [
  {
    name: 'Vishal Malik',
    image: vishalMalik,
    designation: '',
    linkedin: 'https://www.linkedin.com/in/vishal-malik-0a835315b/',
  },
  {
    name: 'Harpreet Dhiman',
    image: harpreetDhiman,
    designation: '',
    linkedin: 'https://www.linkedin.com/in/harpreet-d-530699116/',
  },
  {
    name: 'Sagar Yadav',
    image: sagarYadav,
    designation: '',
    linkedin: 'https://www.linkedin.com/in/sagar-yadav-391735306/',
  },
  {
    name: 'Wasim',
    image: null,
    designation: '',
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
          <img src={member.image} alt={member.name} className="member-image" />
        ) : (
          <div className="member-image-placeholder">{initials}</div>
        )}
      </div>
      <h3 className="member-name">{member.name}</h3>
      <span className="member-designation">{member.designation || '\u00A0'}</span>
      {member.linkedin && (
        <div className="member-social-links">
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
        </div>
      )}
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
                  designation: '',
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
