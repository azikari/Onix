import starterBg from '../../assets/images/first-plan-bg.png'
import proBg from '../../assets/images/second-plan-bg.png'
import businessBg from '../../assets/images/third-plan-bg.png'

export const pricingPlans = [
  {
    id: 1,
    title: 'Starter Plan',
    oldPrice: '$160/mo',
    newPrice: '$140',
    features: ['10 Projects', '100 GB space', '20 SEO checkups', 'Basic Support'],
    buttonText: 'Get Started',
    bgImage: starterBg,
  },
  {
    id: 2,
    title: 'Standard Plan',
    oldPrice: '$240/mo',
    newPrice: '$200',
    features: ['20 Projects', '200 GB space', '50 SEO checkups', 'Pro Support'],
    buttonText: 'Get It Now',
    bgImage: proBg,
  },
  {
    id: 3,
    title: 'Advanced Plan',
    oldPrice: '$360/mo',
    newPrice: '$280',
    features: ['30 Projects', '300 GB space', '100 SEO checkups', 'Best Support'],
    buttonText: 'Buy Now',
    bgImage: businessBg,
  },
]
