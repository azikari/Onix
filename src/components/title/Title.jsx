import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold leading-snug mx-auto">
        {title?.beforeProvide && <span>{title.beforeProvide}</span>}
        {title?.provide && <span>{title.provide}</span>}
        {title?.middle && <span>{title.middle}</span>}
        {title?.withText && <span>{title.withText}</span>}
        {title?.ourTools && <span>{title.ourTools}</span>}
      </h2>

      {subTitle && (
        <p className="text-3xl text-[#ff695f] opacity-20 font-semibold mt-2">
          {subTitle}
        </p>
      )}
    </div>
  )
}

export default Title
