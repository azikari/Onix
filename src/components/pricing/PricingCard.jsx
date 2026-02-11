import React from 'react'

const PricingCard = ({ title, oldPrice, newPrice, features, buttonText, bgImage }) => {
    return (
        <div
            className="relative rounded-[2rem] overflow-hidden w-[400px] h-[480px] text-center p-8 flex flex-col justify-between border border-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <h3 className="text-xl font-semibold mt-4 mb-2 text-black">{title}</h3>

            <div className="text-[#ff695f]">
                <span className="line-through opacity-70 block">{oldPrice}</span>
                <span className="text-5xl font-bold block">{newPrice}</span>
            </div>

            <ul className="mt-4 mb-2 space-y-6 text-gray-500 text-sm">
                {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>

            <a
                href="#"
                className="bg-[#03a4ed] hover:bg-[#ff695f] text-white px-6 py-3 rounded-full text-base w-[140px] mx-auto transition mb-6"
            >
                {buttonText}
            </a>
        </div>
    )
}

export default PricingCard
