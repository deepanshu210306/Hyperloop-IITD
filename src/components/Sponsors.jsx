import logo from './logo.png'
import './Sponsors.css'

const Sponsors = () => {
  // Using current logo for all 9 sponsors - will be replaced later
  const sponsors = Array(12).fill({ logo, name: 'Sponsor' })

  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        <h2 className="sponsors-title">Our Sponsors</h2>
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <img src={sponsor.logo} alt={`${sponsor.name} ${index + 1}`} className="sponsor-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors

