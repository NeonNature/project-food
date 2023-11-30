import '../styles/mission.scss'
import MissionImage from '../assets/images/mission.jpeg'

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="row">
        <div className="col">
          <div>
            <div className="mission-title">Our mission</div>
            <h2 className="mission-header">
              Our mission is to disrupt the food industry
            </h2>
            <div>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </div>
          </div>
        </div>
        <div className="col">
          <div className="mission-image-wrapper">
            <img
              src={MissionImage}
              className="mission-image"
              alt="Picture of a mobile phone showcasing the delivery app"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
