import dummyImage from './Dummy.jpg'
import profKrishna from './prof krishna.png'
import profSumitP from './Prof. Sumit P.png'
import profSunilJha from './Prof. Sunil Jha.png'
import profDDasgupta from './Prof. D. Dasgupta.png'
import profKrishanKant from './Prof. Krishan kant.png'
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
              We are a team of 25+ zealous undergraduate engineers from several disciplines of IIT Delhi working together to empower this world with another mode of transportation technology.
            </p>
            <p className="about-us-paragraph">
              Our team believes in diligence, discipline, hard work, and learning. We are committed to promoting interdisciplinary exchanges of knowledge and ideas. As part of our mission, we intend to develop an autonomous scalable pod and develop new technologies to facilitate the commercialization of the hyperloop system. Currently, we are working in the institute's laboratory. Being the latest addition to the technical clubs of IIT Delhi, we are looking for tech enthusiasts ready to take the hyperloop industry to the next level. We have a team of experienced faculty advisors, and innovative engineers prepared to take transportation technology to new heights.
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

