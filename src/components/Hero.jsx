import dummyImage from './Dummy.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${dummyImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Redefining the Future of Transportation</h1>
        <p className="hero-description">
          Infinity Hyperloop IIT Delhi
        </p>
      </div>
    </section>
  )
}

export default Hero

