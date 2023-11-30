import '../styles/intro.scss'
import Rider from '../assets/images/intro-main.png'
import Review from '../assets/images/intro-review.png'
import Time from '../assets/images/intro-time.svg'

interface IntroNumberProps {
  count: string
  sign: string
  text: string
}

const IntroNumber = ({ count, sign, text }: IntroNumberProps) => {
  return (
    <>
      <div className="intro-number">
        {count}
        <span className="intro-sign">{sign}</span>
      </div>
      <div className="intro-text">{text}</div>
    </>
  )
}

const Introduction = () => {
  return (
    <>
      <div className="section-intro">
        <div className="intro-grid">
          <div>
            <div className="intro-title">ABOUT DELIVER X</div>
            <h1 className="intro-header">
              We are here to help amazing restaurants get great customers
            </h1>
            <div>
              At morbi adipiscing sit sed consectetur senectus Dignissim sed
              amet tincidunt vitae ultricies ultrices amet fermentum amet neque
              et id sed lacinia massa pretium aliquam libero et.
            </div>
          </div>
          <div>
            <div className="intro-image-wrapper">
              <img src={Rider} alt="Picture of a Rider" />
              <div className="intro-image-review">
                <img src={Review} alt="Picture of a food review" />
              </div>
              <div className="intro-image-delivery">
                <img src={Time} alt="Picture of a scooter" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <IntroNumber count={'10M'} sign="+" text="Happy customers" />
          </div>
          <div className="col">
            <IntroNumber count={'500k'} sign="+" text="Restaurants available" />
          </div>
          <div className="col">
            <IntroNumber count={'30M'} sign="+" text="Successful deliveries" />
          </div>
          <div className="col">
            <IntroNumber count={'99.9'} sign="%" text="Customer satisfaction" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduction
