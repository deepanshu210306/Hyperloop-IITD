import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './EventsPage.css'

// Event images
import maglev1 from '../components/assets/events/maglec_decoded_1.png'
import maglev2 from '../components/assets/events/maglec_decoded_2.png'
import openhouse1 from '../components/assets/events/openhouse_2025_1.png'
import openhouse2 from '../components/assets/events/openhouse_2025_2.png'
import openhouse3 from '../components/assets/events/openhouse_2025_3.png'
import redbull1 from '../components/assets/events/red_bull_1.png'
import testbench1 from '../components/assets/events/testbench_1.png'
import testbench2 from '../components/assets/events/testbench_2.png'
import testbench3 from '../components/assets/events/testbench_3.png'
import ghcImg from '../components/assets/events/GHC_img.png'

const events = [
  {
    id: 1,
    title: 'Global Hyperloop Competition 2026',
    date: 'January 2026',
    description:
      'IIT Madras organised the Global Hyperloop Competition 2.0 (Asia\'s first) that saw over 200 participants. With an upgraded track of 422 metres, GHC saw teams showcasing their innovation. Infinity Hyperloop (IIT Delhi) participated under the DesignX category and won the Best Levitation and Stabilization Award. Our solution demonstrated a fine balance of theoretical modeling, simulations, and practical feasibility. The Jury appreciated the robustness, safety considerations, and scalability of the proposed design.',
    images: [ghcImg],
    highlight: 'Best Levitation & Stabilization Award',
  },
  {
    id: 2,
    title: 'Maglev Decoded',
    date: '23 October 2025',
    description:
      'An interactive session on Magnetic Levitation covering the fundamentals of EMS (Electromagnetic Suspension), IMU (Inertial Monitoring Unit) based control, and the science behind our levitation test bench.',
    images: [maglev1, maglev2],
    highlight: null,
  },
  {
    id: 3,
    title: 'Open House 2025',
    date: '2025',
    description:
      'Infinity Hyperloop showcased its work at the IIT Delhi Open House, receiving a cash reward of ₹10,000 from IITD. Visitors experienced our pod design, levitation demonstrations, and the team\'s vision for next-generation transportation.',
    images: [openhouse1, openhouse2],
    highlight: 'Cash Reward ₹10K by IITD',
  },
  {
    id: 4,
    title: 'Test Bench Demonstration',
    date: '2025',
    description:
      'Our team demonstrated different types of levitation and showcased the EMS (Electromagnetic Suspension) system on our custom-built test bench. The demonstration highlighted our progress in achieving stable levitation and precise gap control.',
    images: [testbench1, testbench2],
    highlight: null,
  },
  {
    id: 5,
    title: 'Red Bull Event',
    date: '2025',
    description:
      'Infinity Hyperloop represented IIT Delhi at the Red Bull event, engaging with a wider audience about the future of hyperloop transportation technology.',
    images: [redbull1, redbull1],
    highlight: null,
  },
  {
    id: 6,
    title: 'TRYST \'24',
    date: '2024',
    description:
      'The team participated in TRYST, IIT Delhi\'s annual technical festival, presenting our hyperloop pod design and research to a diverse audience of students, faculty, and industry professionals.',
    images: [],
    highlight: null,
  },
  {
    id: 7,
    title: 'European Hyperloop Week 2024',
    date: '2024',
    description:
      'Infinity Hyperloop participated in the European Hyperloop Week, an annual international event dedicated to the future of Hyperloop technology, joining university teams, speakers, companies, and enthusiasts from around the world.',
    images: [],
    highlight: null,
  },
]

const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="events-hero">
        <Navbar />
        <div className="events-hero-overlay"></div>
        <div className="events-hero-content">
          <h1 className="events-hero-title">Events</h1>
          <p className="events-hero-subtitle">Our journey through events and milestones</p>
        </div>
      </div>

      <section className="events-section">
        <div className="events-container">
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-card-header">
                  <h2 className="event-title">{event.title}</h2>
                  <span className="event-date">{event.date}</span>
                  {event.highlight && (
                    <span className="event-highlight">{event.highlight}</span>
                  )}
                </div>
                <p className="event-description">{event.description}</p>
                {event.images.length > 0 && (
                  <div className="event-images">
                    {event.images.slice(0, 2).map((img, idx) => (
                      <div key={idx} className="event-image">
                        <img src={img} alt={`${event.title} - Image ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EventsPage
