import '../styles/partner.scss'
import Customers from '../assets/images/partner-customer.svg'
import Restaurants from '../assets/images/partner-restaurant.svg'
import Riders from '../assets/images/partner-rider.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface PartnerCardProps {
  image: string
  alt: string
  title: string
  content: string
  id: number
}

const PartnerCard = ({ image, alt, title, content, id }: PartnerCardProps) => {
  return (
    <div className="text-center">
      <div className={`partner-card-img state-${id}`}>
        <img src={image} alt={alt} />
      </div>
      <div className="partner-card-title">{title}</div>
      <div>{content}</div>
    </div>
  )
}

const Partners = () => {
  const ref = useRef<null | HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      gsap.fromTo(
        element.querySelectorAll('.partner-card-img.state-1'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          scrollTrigger: {
            trigger: element.querySelector('.partner-card-title'),
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.partner-card-img.state-2'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          scrollTrigger: {
            trigger: element.querySelector('.partner-card-title'),
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.partner-card-img.state-3'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: element.querySelector('.partner-card-title'),
          },
        }
      )
    }
  }, [])

  return (
    <div className="partner-container" ref={ref}>
      <div className="partner-wrapper">
        <div className="partner-title">Our partners</div>
        <h2 className="partner-header">
          We don’t walk alone, Deliver X works thanks to our partners
        </h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
          egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
        </div>
      </div>
      <div className="partner-grid">
        <PartnerCard
          id={1}
          image={Customers}
          alt="Illustration of a customer"
          title="Customers"
          content="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        />
        <PartnerCard
          id={2}
          image={Restaurants}
          alt="Illustration of a restaurant"
          title="Restaurants"
          content="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        />
        <PartnerCard
          id={3}
          image={Riders}
          alt="Illustration of a rider"
          title="Riders"
          content="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        />
      </div>
    </div>
  )
}

export default Partners
