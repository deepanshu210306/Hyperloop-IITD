import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './EventsPage.css'

// Event images
import maglec1 from '../components/maglec_decoded_1.HEIC'
import maglec2 from '../components/maglec_decoded_2.HEIC'
import openhouse1 from '../components/openhouse_2025_1.HEIC'
import openhouse2 from '../components/openhouse_2025_2.HEIC'
import openhouse3 from '../components/openhouse_2025_3.png'
import redbull1 from '../components/red_bull_1.HEIC'
import testbench1 from '../components/testbench_1.png'
import testbench2 from '../components/testbench_2.HEIC'
import testbench3 from '../components/testbench_3.HEIC'

const events = [
  {
    id: 1,
    title: 'Maglec Decoded',
    images: [maglec1, maglec2]
  },
  {
    id: 2,
    title: 'Open House 2025',
    images: [openhouse1, openhouse2]
  },
  {
    id: 3,
    title: 'Red Bull Event',
    images: [redbull1, redbull1] // Using same image twice as only one available
  },
  {
    id: 4,
    title: 'Test Bench',
    images: [testbench1, testbench2]
  }
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
                <h2 className="event-title">{event.title}</h2>
                <div className="event-images">
                  {event.images.slice(0, 2).map((img, idx) => (
                    <div key={idx} className="event-image">
                      <img src={img} alt={`${event.title} - Image ${idx + 1}`} />
                    </div>
                  ))}
                </div>
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
