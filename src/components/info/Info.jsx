import React from "react";
import { ImFacebook, ImTwitter, ImBehance, ImInstagram } from "react-icons/im";
import { PiTelegramLogoBold } from "react-icons/pi";
import logo from '../../assets/images/logo.png'

const Info = () => {
  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 -mt-28">

        <div className="space-y-5 lg:pl-16">
          <img src={logo} alt="Company logo" className="w-24" />
          <p className="text-gray-400 text-base">info@company.com</p>
          <div className="flex gap-3">
            {[ImFacebook, ImTwitter, ImBehance, ImInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#03a4ed] text-white transition-colors duration-300 hover:bg-[#ff695f]"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold text-lg mb-5">Services</h3>
          <ul className="space-y-3 text-gray-400 text-base">
            {["SEO Development", "Business Growth", "Social Media Managment", "Website Optimization"].map((item, i) => (
              <li key={i}>
                <a href="#home" className="hover:text-[#ff695f] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:-ml-4">
          <h3 className="text-gray-900 font-semibold text-lg mb-5">Community</h3>
          <ul className="space-y-3 text-gray-400 text-base">
            {["Digital Marketing", "Business Ideas", "Website Checkup", "Page Speed Test"].map((item, i) => (
              <li key={i}>
                <a href="#home" className="hover:text-[#ff695f] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:-ml-16">
          <h3 className="text-gray-900 font-semibold text-lg mb-5">Subscribe Newsletters</h3>
          <p className="text-gray-400 mb-6 text-base">
            Get our latest news and ideas to your <br /> inbox
          </p>
          <div className="relative max-w-[300px]">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-full bg-[#03a4ed] text-white placeholder-white px-5 py-3 outline-none text-sm"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white">
              <PiTelegramLogoBold size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Info;
