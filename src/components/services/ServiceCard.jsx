import React from 'react'

const ServiceCard = ({ title, image, text }) => {
  return (
    <div
      className="bg-white rounded-3xl px-6 py-8 flex flex-col items-center text-center w-[290px] min-h-[320px] gap-6 border border-gray-50 shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <img
        src={image}
        alt={title}
        className="w-12 h-12 object-contain mt-2"
      />

      <div className="w-full h-[1px] bg-gray-200" />

      <p className="text-gray-800 text-[16px] leading-relaxed">
        {text}
      </p>
    </div>
  )
}

export default ServiceCard
