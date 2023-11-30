import '../styles/journey.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface JourneyCardProps {
  text: string
  title: string
  date: string
  id: string
}

const JourneyCard = ({ text, title, date, id }: JourneyCardProps) => {
  return (
    <div className={`journey-card-container state-${id}`}>
      <div className="journey-card-date">{date}</div>
      <div className="journey-card-title">{title}</div>
      <div>{text}</div>
    </div>
  )
}

const Journey = () => {
  const ref = useRef<null | HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      gsap.fromTo(
        element.querySelectorAll('.journey-card-container.state-1'),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: element.querySelector('.journey-card-container.state-1'),
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.journey-card-container.state-2'),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: element.querySelector('.journey-card-container.state-2'),
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.journey-card-container.state-3'),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: element.querySelector('.journey-card-container.state-3'),
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.journey-card-container.state-4'),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: element.querySelector('.journey-card-container.state-4'),
          },
        }
      )
    }
  }, [])

  return (
    <div className="content-bg" ref={ref}>
      <div className="journey-container">
        <div className="journey-grid">
          <div className="journey-wrapper">
            <div className="journey-sticky">
              <div className="journey-content">
                <div className="journey-title">Our journey</div>
                <h2 className="journey-header">
                  It has been a long but incredible journey
                </h2>
                <div className="journey-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit tortor
                  eu egestas morbi sem vulputate etiam facilisis pellentesque ut
                  quis.
                </div>
                <div className="journey-button">
                  <div>
                    <a href="#">Download app</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-roadmap">
            <div className="journey-roadmap-grid">
              <JourneyCard
                id={1}
                date="2016"
                title="Deliver X was founded"
                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam."
              />
              <JourneyCard
                id={2}
                date="2018"
                title="Raised Series A at $50M valuation"
                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam."
              />
              <JourneyCard
                id={3}
                date="2019"
                title="Raised Series B at $600M valuation"
                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam."
              />
              <JourneyCard
                id={4}
                date="2022"
                title="Raised Series C at $3B valuation"
                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey
