import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AboutPage.css'

// Professor images
import profKrishna from '../components/prof krishna.png'
import profSumitP from '../components/Prof. Sumit P.png'
import profSunilJha from '../components/Prof. Sunil Jha.png'
import profDDasgupta from '../components/Prof. D. Dasgupta.png'
import profKrishanKant from '../components/Prof. Krishan kant.png'

// Team images
import jairam from '../components/jairam.jpeg'
import tejasChitale from '../components/Tejas Chitale.jpeg'
import deveshMeena from '../components/Devesh Meena.jpg'
import mukeshThombare from '../components/Mukesh Thombare.jpeg'

const professors = [
  { name: 'Prof. Krishna', image: profKrishna },
  { name: 'Prof. Sumit P.', image: profSumitP },
  { name: 'Prof. Sunil Jha', image: profSunilJha },
  { name: 'Prof. D. Dasgupta', image: profDDasgupta },
  { name: 'Prof. Krishan Kant', image: profKrishanKant },
]

const businessTeam = [
  { name: 'Tejas Chitale', image: tejasChitale, designation: 'Head' },
  { name: 'Devesh Meena', image: deveshMeena, designation: 'Coordinator' },
  { name: 'Mukesh Thombare', image: mukeshThombare, designation: '' },
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
              We are a team of 25+ zealous undergraduate engineers from several disciplines of IIT Delhi working together to empower this world with another mode of transportation technology.
            </p>
            <p className="about-paragraph">
              Our team believes in diligence, discipline, hard work, and learning. We are committed to promoting interdisciplinary exchanges of knowledge and ideas. As part of our mission, we intend to develop an autonomous scalable pod and develop new technologies to facilitate the commercialization of the hyperloop system. Currently, we are working in the institute's laboratory. Being the latest addition to the technical clubs of IIT Delhi, we are looking for tech enthusiasts ready to take the hyperloop industry to the next level. We have a team of experienced faculty advisors, and innovative engineers prepared to take transportation technology to new heights.
            </p>
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

      <Footer />
    </div>
  )
}

export default AboutPage

