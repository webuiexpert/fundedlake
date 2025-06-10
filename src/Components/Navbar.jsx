// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import logo from '../assets/logo.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark text-white shadow-md font-lexend">
      <div className="container w-full max-w-6xl h-100 mx-auto px-4 py-4 lg:px-0 lg:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center space-x-2">
          <img src={logo} alt="logo"  />
            </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/who-we-are" className="hover:text-blue-400">
            WHO WE ARE
          </Link>
          <Link to="/" className="hover:text-blue-400">
            FAQS
          </Link>
          <Link to="/" className="hover:text-blue-400">
            CONTACT US
          </Link>
          <a href="https://fundedlakedashboard.propaccount.com/en/affiliates" target='_blank'>AFFILIATE PROGRAM</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <a href='https://fundedlakedashboard.propaccount.com/en/sign-in' className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded">
            DASHBOARD
          </a>
          <a href='https://fundedlakedashboard.propaccount.com/en/challenges?planid=163' className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 font-bold rounded">
            GET FUNDED
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 text-center">
          <Link to="/who-we-are" className="block hover:text-blue-400">WHO WE ARE</Link>
          <Link to="/faqs" className="block hover:text-blue-400">FAQS</Link>
          <Link to="/contact" className="block hover:text-blue-400">CONTACT US</Link>
          <Link to="/dashboard" className="block bg-sky-500 text-white px-4 py-2 rounded font-bold">
            DASHBOARD
          </Link>
          <Link to="/get-funded" className="block bg-yellow-400 text-black px-4 py-2 rounded font-bold">
            GET FUNDED
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
