import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center text-gray-400 text-base font-normal space-y-1.5">
        <span>Copyright &copy; 2021 Onix Digital Co., Ltd. All Rights Reserved.</span>
        <span>
          Designed by{' '}
          <a
            href="https://templatemo.com/live/templatemo_565_onix_digital"
            className="text-[#ff695f]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karima
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
