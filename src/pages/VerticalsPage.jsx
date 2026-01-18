import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './VerticalsPage.css'

// Import images for each vertical (1 per section)
import mechanicalSubsystems from '../components/mechanical_subsystems_1.png'
import hyperloopAerodynamics from '../components/hyperloop_aerodynamics_1.png'
import levitation from '../components/levitation_1.png'
import powerSystem from '../components/power_system_1.png'
import propulsionSystem from '../components/propulsion_system_1.png'
import senseAndControl from '../components/sense_and_control_1.png'

const verticalsData = [
  {
    id: 1,
    title: 'Mechanical Subsystems',
    tagline: 'Engineering the backbone of hyper-speed.',
    description: 'The Mechanical Subsystem is the ironclad skeleton of the pod, engineered to tame the chaos of high-speed travel. From the adaptive vertical suspension that swallows track imperfections to the magnetic braking mechanisms that deliver relentless stopping power, these systems work in perfect harmony. With an aerodynamic shell slicing through resistance and a chassis built for pure structural dominance, we ensure the ride is as safe as it is thrilling.',
    features: [
      'Vertical and Linear Stability Control',
      'Magnetic Eddy Current Braking',
      'Precise control for safe deceleration',
      'Unparalleled Structural Integrity'
    ],
    image: mechanicalSubsystems,
    icon: '⚙️'
  },
  {
    id: 2,
    title: 'Hyperloop Aerodynamics',
    tagline: 'Unlocking the power of airflow.',
    description: "We don't just move through air; we master it. Our aerodynamics team combines cutting-edge airflow science with precision engineering to carve the perfect path forward. By unlocking unprecedented speed and efficiency through rigorous simulation, we are paving the way for a cleaner, smarter, and faster world. This is where sustainability meets the sound barrier.",
    features: [
      'Cutting-edge designs to reduce air resistance',
      'Advanced airflow simulations and testing',
      'Optimising pod shapes for maximum efficiency and speed'
    ],
    image: hyperloopAerodynamics,
    icon: '🌪️'
  },
  {
    id: 3,
    title: 'Power System',
    tagline: 'The high-voltage lifeline of the pod.',
    description: "This is the beating heart of the machine. Serving as the central hub for energy storage and intelligent distribution, our Power System is built on a modular architecture of pure endurance. With a sophisticated Battery Management System (BMS) that vigilantly balances every volt and degree of temperature, we ensure maximum performance and lifespan. It's not just a battery; it's a smart energy fortress.",
    features: [
      '400V, 40A rated',
      '12s2p stack, modular design',
      'Custom Designed BMS (Battery Management System)',
      'Master - Slave Topology'
    ],
    image: powerSystem,
    icon: '🔋'
  },
  {
    id: 4,
    title: 'Sense & Control',
    tagline: 'The brain behind the velocity.',
    description: 'Speed is nothing without control. Our Sense and Control unit is the digital nervous system, ensuring a seamless transition between pod states. By utilising a decentralised architecture and robust emergency circuits, we eliminate single points of failure. It coordinates every microsecond of the journey, delivering a transportation experience that is safe, efficient, and intelligently automated.',
    features: [
      '4 Tangible Pod States',
      'Robust Emergency Circuit',
      'Dedicated Brakes and Propulsion ECU'
    ],
    image: senseAndControl,
    icon: '🎛️'
  },
  {
    id: 5,
    title: 'Propulsion System',
    tagline: 'Frictionless flight, environmentally fueled.',
    description: 'Forget combustion; this is the future of thrust. Our propulsion system utilises Linear Induction Motors (LIM) to achieve frictionless, contactless acceleration. Designed in-house for massive thrust capacity, this environmentally friendly powerhouse is capable of rapid acceleration and deceleration. It is the optimal solution for levitated travel, pushing the boundaries of what an electric motor can do.',
    features: [
      '1 kW Double-Sided LIM Power Stage',
      'In-House Manufactured',
      'Custom Motor Controller'
    ],
    image: propulsionSystem,
    icon: '🚀'
  },
  {
    id: 6,
    title: 'Levitation',
    tagline: 'Defying gravity, defining efficiency.',
    description: "We are eliminating the oldest enemy of speed: friction. By utilising Hybrid Electromagnetic Suspension (HEMS), we lift the pod effortlessly using high-strength permanent magnets assisted by electromagnets for precise controllability. This approach slashes manufacturing costs while maximising power efficiency, proving that the future of travel doesn't roll—it floats.",
    features: [
      'Power Efficient',
      'Automated gap control',
      'Continuous safety monitoring'
    ],
    image: levitation,
    icon: '🧲'
  }
]

const VerticalsPage = () => {
  return (
    <div className="verticals-page">
      <div className="verticals-hero">
        <Navbar />
        <div className="verticals-hero-overlay"></div>
        <div className="verticals-hero-content">
          <h1 className="verticals-hero-title">Technical Verticals</h1>
          <p className="verticals-hero-subtitle">Engineering excellence across every subsystem</p>
        </div>
      </div>

      <section className="verticals-intro">
        <div className="intro-container">
          <p className="intro-text">
            Our hyperloop pod is a marvel of interdisciplinary engineering, with specialized teams 
            working on each critical subsystem. Explore the technology that powers our vision of 
            the future of transportation.
          </p>
        </div>
      </section>

      <section className="verticals-section">
        <div className="verticals-container">
          {verticalsData.map((vertical, index) => (
            <div 
              key={vertical.id} 
              className={`vertical-item ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="vertical-content">
                <div className="vertical-header">
                  <span className="vertical-icon">{vertical.icon}</span>
                  <div className="vertical-title-group">
                    <h2 className="vertical-title">{vertical.title}</h2>
                    <p className="vertical-tagline">{vertical.tagline}</p>
                  </div>
                </div>
                <p className="vertical-description">{vertical.description}</p>
                <div className="vertical-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    {vertical.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <span className="feature-bullet"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="vertical-number">0{vertical.id}</div>
              </div>
              <div className="vertical-image-container">
                <div className="vertical-image-wrapper">
                  <img src={vertical.image} alt={vertical.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default VerticalsPage

