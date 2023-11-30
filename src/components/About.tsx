import '../styles/about.scss'
import AboutImage from '../assets/images/about.jpeg'

const About = () => {
  return (
    <div className="about-container">
      <div className="row">
        <div className="col">
          <div className="about-image-wrapper">
            <img
              src={AboutImage}
              className="about-image"
              alt="Picture of a delivery man carrying a delivery bag"
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="about-title">About us</div>
            <h2 className="about-header">Our company started back in 2016</h2>
            <div>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
