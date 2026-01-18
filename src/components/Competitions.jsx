import dummyImage from './Dummy.jpg'
import './Competitions.css'

const Competitions = () => {
  const competitions = [
    {
      id: 1,
      title: 'European Hyperloop Conference',
      description: 'The European Hyperloop Week is an annual international event dedicated to the \'transport of the future\', the Hyperloop. This event enables university students, guest speakers, companies, and hyperloop enthusiasts to discuss the technology, feasibility, and scalability of the Hyperloop.'
    },
    {
      id: 2,
      title: 'Canadian Hyperloop Conference (CHC)',
      description: 'The annual Canadian Hyperloop Conference is dedicated to developing the technologies and policies required for a fully functioning Hyperloop pod and track, by: Encouraging the development and concrete demonstration of Hyperloop technology by challenging student teams in an annual pod demo - the Canadian Hyperloop Competition. Developing a sense of community by hosting knowledge-sharing events, research, and industry speakers, and a social media presence appealing to the general public.'
    },
    {
      id: 3,
      title: 'Space-X Hyperloop Pod Competition',
      description: 'To encourage students to contribute to the development of the Hyperloop system proposed by Elon Musk in 2013, in 2015 the aerospace company SpaceX initiated the international "SpaceX Hyperloop Pod Competition". After having set up a 1.2 km long vacuum tube next to their headquarters in Hawthorne, California, SpaceX held four editions of the competition, the last one in July 2019.'
    }
  ]

  return (
    <section className="competitions-section">
      <div className="competitions-container">
        <h2 className="competitions-title">Our Competitions</h2>
        <div className="competitions-list">
          {competitions.map((competition) => (
            <div key={competition.id} className="competition-item">
              <div className="competition-text">
                <h3 className="competition-item-title">{competition.title}</h3>
                <p className="competition-description">{competition.description}</p>
              </div>
              <div className="competition-image">
                <img src={dummyImage} alt={competition.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Competitions

