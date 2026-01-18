import './Cards.css'

const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: 'Innovation',
      description: 'Pushing the boundaries of hyperloop technology through cutting-edge research and development.',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Engineering Excellence',
      description: 'Building world-class hyperloop systems with precision engineering and attention to detail.',
      icon: '⚙️'
    },
    {
      id: 3,
      title: 'Collaboration',
      description: 'Working together with industry leaders and academic institutions to shape the future.',
      icon: '🤝'
    },
    {
      id: 4,
      title: 'Sustainability',
      description: 'Creating eco-friendly transportation solutions for a better tomorrow.',
      icon: '🌱'
    }
  ]

  return (
    <section className="cards-section">
      <div className="cards-container">
        <h2 className="cards-section-title">What We Do</h2>
        <div className="cards-grid">
          {cardData.map((card) => (
            <div key={card.id} className="card">
              <div className="card-content">
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <button className="card-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards

