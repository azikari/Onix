import React, { useState, useEffect } from 'react'
import Title from '../title/Title'
import leftImage from '../../assets/images/services-left.png'
import rightImage from '../../assets/images/services-right.png'
import ServiceCard from './ServiceCard'
import { servicesData } from './servicesData'

const Services = () => {
  const cardsPerPage = 4
  const totalPages = Math.ceil(servicesData.length / cardsPerPage)
  const [startIndex, setStartIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => {
        const nextIndex = (prev + 1) % servicesData.length
        setCurrentPage(Math.floor(nextIndex / cardsPerPage))
        return nextIndex
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const visibleCards = Array.from({ length: cardsPerPage }).map((_, i) => {
    return servicesData[(startIndex + i) % servicesData.length]
  })

  return (
    <section id="services" className="scroll-mt-28 relative bg-white pt-32 pb-20 min-h-[700px]">
      <img
        src={leftImage}
        alt="Services decor"
        className="absolute top-0 left-60 h-[600px] object-contain z-0"
      />
      <img
        src={rightImage}
        alt="Services decor right"
        className="absolute -bottom-10 right-6 h-[300px] object-contain"
      />

      <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col items-center">
        <Title
          title={{
            beforeProvide: 'We ',
            provide: <span className="text-[#03a4ed]">Provide</span>,
            middle: ' The Best Service',
            withText: (
              <>
                <br />
                With <span className="text-[#ff695f]">Our Tools</span>
              </>
            ),
          }}
          subTitle="Our Services"
        />


        <div className="relative z-10 flex justify-center gap-8 mt-6 w-full flex-wrap">
          {visibleCards.map(card => (
            <ServiceCard
              key={card.id}
              title={card.title}
              image={card.image}
              text={card.text}
            />
          ))}
        </div>


        <div className="flex justify-center gap-2 mt-6 w-full">
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

export default Services
