// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import logo from '../assets/logo.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark text-white shadow-md font-lexend sticky top-0 z-[999]">
      <div className="container w-full max-w-6xl h-100 mx-auto px-4 py-4 md:py-6 lg:px-0 lg:py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center space-x-2">
          <img src={logo} alt="logo"  />
            </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/who-we-are" className="hover:text-primary">
            WHO WE ARE
          </Link>
          <Link to="/faqs" className="hover:text-primary">
            FAQS
          </Link>
          <Link to="/contact-us" className="hover:text-primary">
            CONTACT US
          </Link>
          <a className='hover:text-primary' href="https://fundedlakedashboard.propaccount.com/en/affiliates" target='_blank'>AFFILIATE PROGRAM</a>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <a href='https://fundedlakedashboard.propaccount.com/en/sign-in' className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold text-sm">
            DASHBOARD
          </a>
          <a href='https://fundedlakedashboard.propaccount.com/en/challenges?planid=163' className="bg-secondory hover:bg-yellow-500 text-black px-4 py-2 font-bold text-sm">
            GET FUNDED
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-3 space-y-2 text-center flex flex-col md:items-center md:justify-center md:px-0 px-4 pb-6 items-start md:gap-4 gap-5">
          <Link to="/who-we-are" className="block hover:text-primary">WHO WE ARE</Link>
          <Link to="/faqs" className="block hover:text-primary">FAQS</Link>
          <Link to="/contact-us" className="block hover:text-primary">CONTACT US</Link>
          <a className='hover:text-primary' href="https://fundedlakedashboard.propaccount.com/en/affiliates" target='_blank'>AFFILIATE PROGRAM</a>
          <Link to="/dashboard" className="block bg-sky-500 text-white md:max-w-[260px] px-4 py-2 font-bold">
            DASHBOARD
          </Link>
          <Link to="/get-funded" className="block bg-secondory text-black md:max-w-[260px] px-4 py-2 font-bold">
            GET FUNDED
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
