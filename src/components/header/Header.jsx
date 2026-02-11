import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import { FiMenu, FiX } from 'react-icons/fi'



const sections = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'videos', label: 'Videos' },
  { id: 'contact', label: 'Contact Us' },
]

const Header = () => {
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActive(sections[i].id)
          break
        }
      }
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md h-20' : 'bg-[#fafafa] shadow-none h-24'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 flex items-center h-full justify-between">
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <div className="flex items-center gap-10 lg:gap-16">
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`font-medium text-base transition-colors whitespace-nowrap ${
                  active === section.id
                    ? 'text-[#ff695f]'
                    : 'text-black hover:text-[#ff695f]'
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block bg-[#ff695f] text-white px-6 py-2.5 rounded-full font-normal transition-colors duration-300 text-base hover:bg-[#03a4ed] whitespace-nowrap"
          >
            Contact Us Now
          </a>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
              {mobileOpen ? <FiX size={32} /> : <FiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden w-full absolute top-full left-0 bg-[#fafafa]">
          <nav className="flex flex-col items-center gap-6 py-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileOpen(false)}
                className={`font-medium text-base transition-colors ${
                  active === section.id
                    ? 'text-[#ff695f]'
                    : 'text-black hover:text-[#ff695f]'
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
