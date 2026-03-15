import './Sponsors.css'

import solidworksLogo from './assets/sponsors/solidworks_logo.png'
import ansysLogo from './assets/sponsors/ANSYS_logo.png'
import altiumLogo from './assets/sponsors/altium_logo.png'
import pcbPowerLogo from './assets/sponsors/pcb_power.webp'

const sponsors = [
  { name: 'SOLIDWORKS', logo: solidworksLogo },
  { name: 'ANSYS', logo: ansysLogo },
  { name: 'Altium', logo: altiumLogo },
  { name: 'PCB Power', logo: pcbPowerLogo },
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
