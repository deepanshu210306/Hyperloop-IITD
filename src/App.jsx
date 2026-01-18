import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import VerticalsPage from './pages/VerticalsPage'
import EventsPage from './pages/EventsPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/verticals" element={<VerticalsPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  )
}

export default App

