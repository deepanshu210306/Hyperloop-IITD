import dummyImage from './assets/common/Dummy.jpg'
import profKrishna from './assets/professors/prof krishna.png'
import profSumitP from './assets/professors/Prof. Sumit P.png'
import profSunilJha from './assets/professors/Prof. Sunil Jha.png'
import profDDasgupta from './assets/professors/Prof. D. Dasgupta.png'
import profKrishanKant from './assets/professors/Prof. Krishan kant.png'
import './AboutUs.css'

const AboutUs = () => {
  const professors = [
    { name: 'Prof. Krishna', image: profKrishna },
    { name: 'Prof. D. Dasgupta', image: profDDasgupta },
    { name: 'Prof. Sunil Jha', image: profSunilJha },
    { name: 'Prof. Sumit P.', image: profSumitP },
    { name: 'Prof. Krishan Kant', image: profKrishanKant },
  ]

  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-text">
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-paragraph">
              We are a team of 25+ zealous undergraduate engineers from across disciplines at IIT Delhi, working together to reimagine transportation through Hyperloop, the fifth mode of transportation.
            </p>
            <p className="about-us-paragraph">
              Our team strives to blend technical acumen with focus on diligence, discipline and perseverance to drive innovation using the Triple Helix model, where we continuously work on exchange of interdisciplinary knowledge from academia to meet the needs of industry with the support of government. Having achieved levitation recently that our team showcased at GHC IIT-M 2026, we are committed to develop an autonomous scalable pod and develop associated innovation technologies to facilitate the commercialization of the hyperloop system. We are based in the State of the Art Research & Innovation Park, IIT Delhi.
            </p>
          </div>
          <div className="about-us-image">
            <img src={dummyImage} alt="About Infinity Hyperloop" />
          </div>
        </div>
        
        {/* Professors Section */}
        <div className="professors-section">
          <h3 className="professors-title">Our Faculty Advisors</h3>
          <div className="professors-grid">
            {professors.map((prof, index) => (
              <div key={index} className="professor-card-small">
                <div className="professor-image-wrapper-small">
                  <img src={prof.image} alt={prof.name} className="professor-image-small" />
                </div>
                <h4 className="professor-name-small">{prof.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

