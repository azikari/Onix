import React from "react";
import { stats } from "./data";
import aboutLeft from "../../assets/images/about-left.png";

const About = () => {
  return (
    <section id="about" className="py-16 scroll-mt-28">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-10 lg:pl-32">

        <div className="flex justify-center">
          <img
            src={aboutLeft}
            alt="About illustration"
            className="w-[300px] sm:w-[450px] md:w-[600px] h-auto"
          />
        </div>

        <div className="w-full lg:w-[640px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-6 sm:mb-12 text-center lg:text-left">
            Grow Your Website With Our{" "}
            <span className="text-[#03a4ed]">SEO Tools</span> &{" "}
            <span className="text-[#ff695f]">Project</span> Management
          </h2>

          <p className="text-gray-800 mb-6 sm:mb-12 text-center lg:text-left">
            You can browse free HTML templates on Too CSS website. Visit the
            website and explore latest website templates for your projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((item) => (
              <div 
                key={item.id} 
                className="text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mb-4 w-12 h-12 object-contain"
                />

                <p className="text-4xl sm:text-5xl font-bold mb-2">{item.value}</p>

                <h4 className="mb-4 text-[#ff695f]">{item.title}</h4>

                <div className="w-full h-[1px] bg-gray-200 mb-4" />

                <p className="text-gray-800 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
