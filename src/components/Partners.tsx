import '../styles/partner.scss'
import Customers from '../assets/images/partner-customer.svg'
import Restaurants from '../assets/images/partner-restaurant.svg'
import Riders from '../assets/images/partner-rider.svg'

interface PartnerCardProps {
  image: string
  alt: string
  title: string
  content: string
}

const PartnerCard = ({ image, alt, title, content }: PartnerCardProps) => {
  return (
    <div className="text-center">
      <div className="partner-card-img">
        <img src={image} alt={alt} />
      </div>
      <div className="partner-card-title">{title}</div>
      <div>{content}</div>
    </div>
  )
}

const Partners = () => {
  return (
    <div className="partner-container">
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
      <div className="row">
        <div className="col">
          <PartnerCard
            image={Customers}
            alt="Illustration of a customer"
            title="Customers"
            content="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
          />
        </div>
        <div className="col">
          <PartnerCard
            image={Restaurants}
            alt="Illustration of a restaurant"
            title="Restaurants"
            content="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
          />
        </div>
        <div className="col">
          <PartnerCard
            image={Riders}
            alt="Illustration of a rider"
            title="Riders"
            content="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
          />
        </div>
      </div>
    </div>
  )
}

export default Partners
