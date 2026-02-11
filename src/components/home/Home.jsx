import React, { useState, useEffect } from 'react'
import leftImage from '../../assets/images/left.png'
import rightImage from '../../assets/images/right.png'
import { FaPhone } from 'react-icons/fa'
import { pages } from './HomeData.jsx'

const Home = () => {
  const [page, setPage] = useState(1)
  const [animate, setAnimate] = useState(false)
  const current = pages[page - 1]

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true)
      setTimeout(() => {
        setPage((prev) => (prev === pages.length ? 1 : prev + 1))
        setAnimate(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="scroll-mt-28 relative w-full bg-white overflow-hidden h-[720px]">
      <img
        src={leftImage}
        alt="Left decor"
        className="absolute left-0 top-0 h-[75%] w-auto object-contain"
      />
      <img
        src={rightImage}
        alt="Right decor"
        className="hidden md:block absolute right-0 top-0 h-[95%] w-auto object-contain"
      />


      <div className="relative z-10 w-full max-w-[660px] mx-auto px-6 pt-28 md:pt-36 md:ml-[16%]">

        <h2
          className={`text-[#ff695f] font-medium text-lg md:text-xl transition-all duration-500 ease-in-out ${animate ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}
        >
          {current.title}
        </h2>

        <h3
          className={`mt-4 text-4xl md:text-5xl lg:text-5xl font-bold leading-tight transition-all duration-500 ease-in-out ${animate ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}
        >
          {current.subtitle}
        </h3>

        <p
          className={`mt-4 text-gray-800 text-sm md:text-base transition-all duration-500 ease-in-out ${animate ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}
        >
          {current.description}
        </p>

        <div
          className={`mt-6 flex items-center gap-6 transition-all duration-500 ease-in-out ${animate ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}
        >
          <a
            href="#"
            className="bg-[#03a4ed] text-white px-7 py-3 rounded-full text-base hover:bg-[#ff695f] transition"
          >
            {current.buttonText}
          </a>

          <div className="flex items-center gap-2">
            <div className="bg-[#ff695f] text-white p-3 rounded-full flex items-center justify-center">
              <FaPhone size={16} />
            </div>
            <span className="text-[#ff695f] font-medium">{current.phone}</span>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 max-w-[140px]">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`relative font-normal text-xl ${page === idx + 1 ? 'text-[#ff695f]' : 'text-black'}`}
            >
              {idx + 1}
              {page === idx + 1 && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#ff695f]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
