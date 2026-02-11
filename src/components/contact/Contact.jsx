import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import contactLeft from '../../assets/images/contact-left-dec.png'
import contactRight from '../../assets/images/contact-dec.png'
import footerDecor from '../../assets/images/footer-dec.png'
import formBg from '../../assets/images/contact-form-bg.png'

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 overflow-hidden min-h-[1100px]">

      <img
        src={contactLeft}
        alt="left decor"
        className="absolute left-0 top-40 w-[170px] z-0"
      />

      <img
        src={contactRight}
        alt="right decor"
        className="absolute right-0 bottom-6 w-[460px] z-0"
      />

      <img
        src={footerDecor}
        alt="footer decor"
        className="absolute bottom-0 left-0 w-full z-0"
      />

      <div className="relative z-10 max-w-[1700px] mx-auto px-10">
        <div className="relative">
          <div className="text-left mb-10 max-w-[900px] ml-[180px]">
            <h2 className="text-3xl font-bold leading-snug">
              <span className="text-black">Feel Free To </span>
              <span className="text-[#03a4ed]">Contact</span>
              <span className="text-black"> Us Via The </span>
              <span className="text-[#ff695f]">HTML</span>
              <br />
              <span className="text-[#ff695f]">Form</span>
            </h2>
          </div>

          <div className="ml-[180px] w-[1000px] h-[380px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&z=13&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="map"
            />
          </div>

          <div className="absolute right-45 top-15 w-full max-w-[600px] z-20">
            <div
              className="w-full p-10 rounded-3xl min-h-[480px]"
              style={{
                backgroundImage: `url(${formBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}
            >
              <form className="flex flex-col gap-6 pt-6 pl-16">
                <div className="w-[80%]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full py-3 bg-transparent outline-none border-b border-[#9bdbf8] placeholder-gray-300 placeholder-font-light placeholder-text-xs transition"
                  />
                </div>

                <div className="w-[80%]">
                  <input
                    type="text"
                    placeholder="Surname"
                    className="w-full py-3 bg-transparent outline-none border-b border-[#9bdbf8] placeholder-gray-300 placeholder-font-light placeholder-text-xs transition"
                  />
                </div>

                <div className="w-[80%]">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full py-3 bg-transparent outline-none border-b border-[#9bdbf8] placeholder-gray-300 placeholder-font-light placeholder-text-xs transition"
                  />
                </div>

                <div className="w-[80%]">
                  <input
                    type="text"
                    placeholder="Your Website URL"
                    className="w-full py-3 bg-transparent outline-none border-b border-[#9bdbf8] placeholder-gray-300 placeholder-font-light placeholder-text-xs transition"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 px-8 py-3 rounded-full bg-[#ff695f] text-white text-base hover:bg-[#03a4ed] transition self-start"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          <div className="ml-[180px] mt-8 flex gap-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ff695f]">
                <FaPhone className="text-white text-xl" />
              </div>
              <div className="flex flex-col text-[#ff695f] text-sm">
                <span>010-020-0340</span>
                <span>090-080-0760</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ff695f]">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div className="flex flex-col text-[#ff695f] text-sm">
                <span>info@company.com</span>
                <span>mail@company.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
