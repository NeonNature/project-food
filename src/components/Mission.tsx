import '../styles/mission.scss'
import MissionImage from '../assets/images/mission.jpeg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Mission = () => {
  const ref = useRef<null | HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      gsap.fromTo(
        element.querySelectorAll('.mission-image-wrapper'),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: element.querySelector('.mission-grid'),
          },
        }
      )
    }
  }, [])

  return (
    <div className="mission-container" ref={ref}>
      <div className="mission-grid">
        <div className="mission-content">
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
        <div>
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
