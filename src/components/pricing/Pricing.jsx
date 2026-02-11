import React from 'react'
import Title from '../title/Title'
import PricingCard from './PricingCard'
import { pricingPlans } from './pricingData'
import leftDecor from '../../assets/images/left-pricing.png'
import rightDecor from '../../assets/images/right-pricing.png'

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-white py-28">
      <img
        src={leftDecor}
        alt="Left decor"
        className="absolute left-0 top-30 h-[800px] object-contain z-0" 
      />
      <img
        src={rightDecor}
        alt="Right decor"
        className="absolute right-0 top-0 h-[860px] object-contain z-0" 
      />


      <div className="relative z-10">
        <Title
          title={{
            beforeProvide: 'Select A Suitable ',
            provide: <span className="text-[#03a4ed]">Plan</span>,
            withText: (
              <> For Your
                <br />
                Next <span className="text-[#ff695f]">Projects</span>
              </>
            ),
          }}
          subTitle="OUR PLANS"
        />



        <div className="relative z-10 flex justify-center gap-8 flex-wrap mt-12">
          {pricingPlans.map(plan => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
