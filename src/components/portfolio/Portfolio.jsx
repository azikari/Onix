import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Title from '../title/Title'
import { portfolioData } from './portfolioData'
import leftDecor from '../../assets/images/portfolio-left-dec.png'
import hoverBg from '../../assets/images/hover-bg.png'

const Portfolio = () => {
  const cardsPerPage = 4
  const totalPages = Math.ceil(portfolioData.length / cardsPerPage)
  const [startIndex, setStartIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => {
        const nextIndex = (prev + 1) % portfolioData.length
        setCurrentPage(Math.floor(nextIndex / cardsPerPage))
        return nextIndex
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const visibleCards = Array.from({ length: cardsPerPage }).map((_, i) => {
    return portfolioData[(startIndex + i) % portfolioData.length]
  })

  const goPrev = () => {
    const prevPage = (currentPage - 1 + totalPages) % totalPages
    setCurrentPage(prevPage)
    setStartIndex(prevPage * cardsPerPage)
  }

  const goNext = () => {
    const nextPage = (currentPage + 1) % totalPages
    setCurrentPage(nextPage)
    setStartIndex(nextPage * cardsPerPage)
  }

  return (
    <section id="portfolio" className="relative py-32 max-w-[2000px] mx-auto">
      <img
        src={leftDecor}
        alt="Left decor"
        className="absolute top-28 left-20 w-[350px] object-contain z-0"
      />

      <div className="relative w-full">
        <Title
          title={{
            beforeProvide: 'Our Recent ',
            provide: <span className="text-[#03a4ed]">Projects</span>,
            withText: (
              <>
                {' '} & Case
                <br />
                Studies <span className="text-[#ff695f]">For Clients</span>
              </>
            ),
          }}
          subTitle="OUR PORTFOLIO"
        />

        <div className="relative mt-12">
          <button
            onClick={goPrev}
            className="absolute left-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#ff695f]/30 hover:bg-[#ff695f] active:bg-[#ff695f] transition flex items-center justify-center"
          >
            <FaChevronLeft className="text-white text-sm" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#ff695f]/30 hover:bg-[#ff695f] active:bg-[#ff695f] transition flex items-center justify-center"
          >
            <FaChevronRight className="text-white text-sm" />
          </button>

          <div className="flex justify-center relative z-10 w-full gap-8 px-16">
            {visibleCards.map(card => (
              <div
                key={card.id}
                className="relative w-[480px] h-[600px] overflow-hidden cursor-pointer group"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-3xl transition duration-500 group-hover:opacity-60"
                />

                <div
                  className="absolute bottom-6 right-6 w-56 h-48 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-3xl rounded-br-3xl"
                  style={{
                    backgroundImage: `url(${hoverBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white text-right">
                  <h4 className="font-semibold text-lg">{card.title}</h4>
                  <p className="text-sm mt-4 mb-6">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6 w-full max-w-[500px] mx-auto">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index)
                setStartIndex(index * cardsPerPage)
              }}
              className={`rounded-full transition-all duration-300
                ${currentPage === index
                  ? 'w-3 h-3 bg-[#ff695f]'
                  : 'w-2 h-2 bg-[#ff695f] opacity-30'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
