import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CompanyProfile from './pages/CompanyProfile'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import BookOnline from './pages/BookOnline'
import Coach from './pages/Coach'
import School from './pages/School'
import Career from './pages/Career'
import ContactUs from './pages/ContactUs'
import Tournament from './pages/Tournament'
import MarketArea from './pages/MarketArea'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company-profile" element={<CompanyProfile />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/book-an-online" element={<BookOnline />} />
      <Route path="/coach" element={<Coach />} />
      <Route path="/school" element={<School />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/tournament" element={<Tournament />} />
      <Route path="/market-area" element={<MarketArea />} />
    </Routes>
  )
}

export default App
