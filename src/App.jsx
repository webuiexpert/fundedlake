// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import Faq from './pages/Faq'
import ContactUs from './pages/ContactUs'
import GiveawayPopup from './Components/GiveawayPopup'
import Footer from './Components/Footer'
import useLenis from './hooks/useLenis';


function App() {

  useLenis();

  return (
    <>
    <GiveawayPopup />
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
    </>
   
  )
}

export default App
