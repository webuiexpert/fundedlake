import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Faq from './pages/Faq';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GiveawayPopup from './components/GiveawayPopup';
import useLenis from './hooks/useLenis';
import TopBar from './Components/TopBar';

function App() {
  useLenis();

  return (
    <Router>
      <GiveawayPopup />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
