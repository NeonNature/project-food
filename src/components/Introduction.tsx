import '../styles/intro.scss'
import Rider from '../assets/images/intro-main.png'
import Review from '../assets/images/intro-review.png'
import Time from '../assets/images/intro-time.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

interface IntroNumberProps {
  count: string
  sign: string
  text: string
  id: number
}

const IntroNumber = ({ count, sign, text, id }: IntroNumberProps) => {
  return (
    <div className={`intro-number-container state-${id}`}>
      <div className="intro-number">
        {count}
        <span className="intro-sign">{sign}</span>
      </div>
      <div className="intro-text">{text}</div>
    </div>
  )
}

gsap.registerPlugin(ScrollTrigger)

const Introduction = () => {
  const ref = useRef<null | HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      gsap.fromTo(
        element.querySelectorAll('.intro-animate'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element.querySelector('.intro-header'),
          },
        }
      )
    }
  }, [])

  // numbers

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      gsap.fromTo(
        element.querySelectorAll('.intro-number-container.state-1'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          scrollTrigger: {
            trigger: element.querySelector('.intro-numbers-grid'),
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.intro-number-container.state-2'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          scrollTrigger: {
            trigger: element.querySelector('.intro-numbers-grid'),
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.intro-number-container.state-3'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: element.querySelector('.intro-numbers-grid'),
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.intro-number-container.state-4'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element.querySelector('.intro-numbers-grid'),
          },
        }
      )
    }
  }, [])

  // images

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      gsap.fromTo(
        element.querySelectorAll('.intro-image'),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.75,
          scrollTrigger: {
            trigger: element.querySelector('.intro-image-wrapper'),
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.intro-image-secondary'),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector('.intro-image-wrapper'),
          },
        }
      )
    }
  }, [])

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      gsap.fromTo(
        element.querySelectorAll('.intro-image-review'),
        {
          y: 0,
        },
        {
          y: 30,
          delay: 2,
          duration: 3,
          scrollTrigger: {
            trigger: element.querySelector('.intro-image-wrapper'),
            start: 'top center',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.intro-image-delivery'),
        {
          y: 0,
        },
        {
          y: -30,
          duration: 3,
          delay: 2,
          scrollTrigger: {
            trigger: element.querySelector('.intro-image-wrapper'),
            start: 'top center',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }
  }, [])

  return (
    <div className="content-bg" ref={ref}>
      <div className="section-intro">
        <div className="intro-grid">
          <div>
            <div className="intro-title intro-animate">ABOUT DELIVER X</div>
            <h1 className="intro-header intro-animate">
              We are here to help amazing restaurants get great customers
            </h1>
            <div className="intro-animate intro-content">
              At morbi adipiscing sit sed consectetur senectus Dignissim sed
              amet tincidunt vitae ultricies ultrices amet fermentum amet neque
              et id sed lacinia massa pretium aliquam libero et.
            </div>
          </div>
          <div>
            <div className="intro-image-wrapper">
              <img
                src={Rider}
                alt="Picture of a Rider"
                className="intro-image"
              />
              <div className="intro-image-review intro-image-secondary">
                <img src={Review} alt="Picture of a food review" className="" />
              </div>
              <div className="intro-image-delivery intro-image-secondary">
                <img src={Time} alt="Picture of a scooter" />
              </div>
            </div>
          </div>
        </div>
        <div className="intro-numbers-grid">
          <div>
            <IntroNumber count={'10M'} sign="+" text="Happy customers" id={1} />
          </div>
          <div>
            <IntroNumber
              count={'500k'}
              sign="+"
              text="Restaurants available"
              id={2}
            />
          </div>
          <div>
            <IntroNumber
              count={'30M'}
              sign="+"
              text="Successful deliveries"
              id={3}
            />
          </div>
          <div>
            <IntroNumber
              count={'99.9'}
              sign="%"
              text="Customer satisfaction"
              id={4}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
