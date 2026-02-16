import './Sponsors.css'

const sponsors = [
  { name: 'SOLIDWORKS', logo: null },
  { name: 'ANSYS', logo: null },
  { name: 'Altium', logo: null },
  { name: 'PCB Power', logo: null },
]

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        <h2 className="sponsors-title">Our Sponsors</h2>
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              {sponsor.logo ? (
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
              ) : (
                <span className="sponsor-name-text">{sponsor.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
