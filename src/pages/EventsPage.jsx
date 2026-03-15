import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './EventsPage.css'

// Event images
import openhouse1 from '../components/assets/events/openhouse_2025_1.png'
import openhouse2 from '../components/assets/events/openhouse_2025_2.png'
import testbench1 from '../components/assets/events/testbench_1.png'
import testbench2 from '../components/assets/events/testbench_2.png'
import ghcImg from '../components/assets/events/GHC_img.png'
import maglevDecoded from '../components/assets/events/maglev_decoded.png'

const events = [
  {
    id: 1,
    title: 'Global Hyperloop Competition 2026',
    date: 'January 2026',
    description:
      'The Infinity Hyperloop Club at IIT Delhi has steadily expanded its capabilities and technical expertise since its inception, consistently working towards advancing hyperloop technology. This progress was reflected in its participation at the Global Hyperloop Competition (2.0) 2026 organized by IIT Madras, Asia\'s first competition of its kind, which hosted more than 200 participants. The event featured an upgraded 422-metre test track where teams presented innovative hyperloop solutions. Competing in the DesignX category, Infinity Hyperloop showcased a comprehensive levitation and stabilization system built on rigorous theoretical modeling, detailed simulations, and strong practical feasibility. The team\'s design stood out for its robustness, safety considerations, and scalability, earning the Best Levitation and Stabilization Award. This achievement highlights the club\'s growing research depth and its continued commitment to pushing the boundaries of next-generation transportation technology.',
    images: [ghcImg],
    highlight: 'Best Levitation & Stabilization Award',
  },
  {
    id: 2,
    title: 'MagLev Decoded 2025',
    date: '23 October 2025',
    description:
      'MagLev Decoded 2025, organized by the Infinity Hyperloop Club at IIT Delhi, was an interactive session focused on the principles of magnetic levitation technology. The event introduced participants to the fundamentals of Electromagnetic Suspension (EMS) and its role in enabling levitation through controlled magnetic forces. Attendees were also familiarized with the functioning of Inertial Measurement Units (IMU) and how sensor-based feedback is used to stabilize and control levitating systems. Through explanations and demonstrations, the session highlighted the science and engineering behind the club\'s maglev test bench, illustrating how theoretical concepts are applied in real-world prototypes. Overall, the event aimed to deepen participants\' understanding of maglev technology and inspire interest in advanced transportation systems and hyperloop-related innovations.',
    images: [maglevDecoded],
    highlight: null,
  },
  {
    id: 3,
    title: 'Open House 2026',
    date: '2026',
    description:
      'Infinity Hyperloop presented its research and innovations at the IIT Delhi Open House Event 2026, where the team received an encouraging cash reward of \u20B910,000 from IIT Delhi for its efforts. The showcase allowed visitors to closely explore the team\'s Hyperloop pod design and understand the technology behind it. Live demonstrations highlighted the principles of magnetic levitation and propulsion that form the foundation of Hyperloop transportation. The team also explained the feasibility of Hyperloop as a potential fifth mode of transportation, alongside road, rail, water, and air. Through interactive discussions and technical displays, Infinity Hyperloop shared its vision of faster, sustainable, and next-generation travel systems. The event provided an excellent platform for engaging with students, researchers, and technology enthusiasts interested in the future of high-speed transportation.',
    images: [openhouse1, openhouse2],
    highlight: 'Cash Reward \u20B910K by IITD',
  },
  {
    id: 4,
    title: 'Levitation Demonstration',
    date: '2025',
    description:
      'Our team demonstrated different types of levitation and showcased the EMS (Electromagnetic Suspension) system on our custom-built test bench. The demonstration highlighted our progress in achieving stable levitation and precise gap control.',
    images: [testbench1, testbench2],
    highlight: null,
  },
  {
    id: 5,
    title: 'European Hyperloop Week 2026',
    date: '2026',
    description:
      'European Hyperloop Week 2026 will be held in Veendam, Netherlands, bringing together leading university teams, researchers, and industry experts working on the future of Hyperloop technology. Infinity Hyperloop (IIT Delhi) is excited to participate in this global event to showcase its latest advancements in levitation and propulsion modules, highlighting the team\'s continuous progress in developing efficient and innovative Hyperloop systems. Along with the technical demonstrations, the team will present its ongoing research on scaling these technologies for practical and commercial applications, focusing on feasibility, efficiency, and real-world implementation. The event offers a valuable platform for collaboration, learning, and global exposure, and we look forward to contributing to the shared vision of faster, sustainable, and next-generation transportation systems.',
    images: [],
    highlight: 'Upcoming',
  },
  {
    id: 6,
    title: 'TRYST 2026',
    date: '2026',
    description:
      'During TRYST 2026, the annual technical festival of IIT Delhi, Infinity Hyperloop (IIT Delhi) organized the Green Velocity Challenge, a competition focused on exploring sustainable high-speed transportation solutions. The challenge invited student teams to design a feasibility plan for connecting two Indian cities using Hyperloop technology, while carefully addressing its economics, technological requirements, and safety considerations. The event received an enthusiastic response, with 22 teams participating in the initial round. After a competitive screening process, 10 teams advanced to the offline round held at IIT Delhi, where they presented detailed proposals and innovative ideas. Following rigorous evaluation by the jury, three teams were finally selected for their well-researched, practical, and forward-looking solutions for future Hyperloop connectivity in India.',
    images: [],
    highlight: null,
  },
  {
    id: 7,
    title: 'TRYST 2024',
    date: '2024',
    description:
      'During TRYST 2024, the annual technical festival of IIT Delhi, Infinity Hyperloop (IIT Delhi) presented its Hyperloop pod design and research to a wide audience including students, faculty members, and industry professionals. As part of the event, the team also organized an engaging case competition to encourage student innovators to share their ideas on the future of Hyperloop transportation. Participating teams were invited to visualize the technology and develop a feasibility roadmap for its implementation. The competition received enthusiastic participation, with students proposing creative and practical solutions. After a rigorous evaluation process conducted during TRYST 2024, three teams were selected for their outstanding ideas, innovation, and well-structured approaches toward the future of Hyperloop technology.',
    images: [],
    highlight: null,
  },
  {
    id: 8,
    title: 'European Hyperloop Week 2024',
    date: '2024',
    description:
      'Infinity Hyperloop participated in European Hyperloop Week 2024 (EHW\'24) held in Zurich, Switzerland, an international event focused on advancing Hyperloop technology. The event brought together university teams, industry experts, companies, researchers, and technology enthusiasts from across the world to collaborate and share innovations in next-generation transportation. During the event, Infinity Hyperloop showcased its linear motor system designed for propulsion, demonstrating how it can be integrated into Hyperloop infrastructure. The team also presented its ongoing research on scaling the propulsion technology for practical, large-scale applications. The participation provided valuable opportunities for technical exchange, feedback from experts, and collaboration with global Hyperloop teams working toward the future of high-speed transportation.',
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
                    <div className="event-image">
                      <img src={event.images[0]} alt={event.title} />
                    </div>
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
