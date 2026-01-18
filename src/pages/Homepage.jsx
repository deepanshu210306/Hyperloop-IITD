import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Competitions from '../components/Competitions'
import Footer from '../components/Footer'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Competitions />
      <Footer />
    </div>
  )
}

export default Homepage

