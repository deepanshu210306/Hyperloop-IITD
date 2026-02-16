import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Competitions from '../components/Competitions'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Competitions />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Homepage

