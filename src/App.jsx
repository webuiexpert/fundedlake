// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="p-4">Home Page</h1>} />
        <Route path="/who-we-are" element={<h1 className="p-4">Who We Are</h1>} />
        <Route path="/faqs" element={<h1 className="p-4">FAQs</h1>} />
        <Route path="/contact" element={<h1 className="p-4">Contact Us</h1>} />
        <Route path="/dashboard" element={<h1 className="p-4">Dashboard</h1>} />
        <Route path="/get-funded" element={<h1 className="p-4">Get Funded</h1>} />
      </Routes>
    </Router>
  )
}

export default App
