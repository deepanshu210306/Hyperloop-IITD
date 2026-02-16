import './UpcomingEvents.css'

// Event images
import maglec1 from './assets/events/maglec_decoded_1.png'
import maglec2 from './assets/events/maglec_decoded_2.png'
import openhouse1 from './assets/events/openhouse_2025_1.png'
import openhouse2 from './assets/events/openhouse_2025_2.png'
import redbull1 from './assets/events/red_bull_1.png'
import testbench1 from './assets/events/testbench_1.png'
import testbench2 from './assets/events/testbench_2.png'

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Maglev Decoded',
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

  return (
    <section className="events-section">
      <div className="events-container">
        <h2 className="events-title">Events</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-images">
                {event.images.map((img, idx) => (
                  <div key={idx} className="event-image">
                    <img src={img} alt={`${event.title} - Image ${idx + 1}`} />
                  </div>
                ))}
              </div>
              <div className="event-content">
                <h3 className="event-card-title">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents

