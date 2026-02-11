import React from 'react'
import bgImage from '../../assets/images/subscribe-bg.png'
import decor from '../../assets/images/subscribe-dec.png'

const Subscribe = () => {
  return (
    <section id="subscribe" className="relative">
      <div className="relative mx-auto w-full max-w-[1300px] px-6">
        <img
          src={decor}
          alt="Decor"
          className="absolute -top-4 right-0 w-[200px] object-contain z-10"
        />

        <div
          className="rounded-3xl flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '280px',
            padding: '4rem', 
          }}
        >
          <h2 className="text-white text-3xl font-bold mb-6 text-center">
            Know Your Website SEO Score by Email
          </h2>

          <div className="flex items-center w-full max-w-[1000px] bg-white rounded-full px-4 py-3 -mt-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Your Website URL"
                className="w-full h-10 text-sm outline-none text-gray-700"
              />
            </div>

            <div className="w-[1px] h-8 bg-gray-300 mx-4 self-center" />

            <div className="flex-1">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-10 text-sm outline-none text-gray-700"
              />
            </div>

            <button className="ml-4 bg-[#03a4ed] hover:bg-[#ff695f] text-white px-12 py-3 rounded-full text-base transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
