import '../styles/footer.scss'
import Logo from '../assets/images/logo.svg'
import Place1 from '../assets/images/place-1.svg'
import Place2 from '../assets/images/place-2.svg'
import Place3 from '../assets/images/place-3.svg'
import Place4 from '../assets/images/place-4.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface PlaceCardProps {
  text: string
  alt: string
  image: string
}

const PlaceCard = ({ text, alt, image }: PlaceCardProps) => {
  return (
    <div className="place-card-container">
      <div className="place-card-img">
        <div>
          <img src={image} alt={alt} />
        </div>
      </div>
      <div className="place-card-text">{text}</div>
    </div>
  )
}

interface ListItemProps {
  text: string
  special?: boolean
}

const ListItem = ({ text, special = false }: ListItemProps) => {
  return (
    <li>
      <a
        href="https://github.com/NeonNature"
        className={special ? 'special' : ''}
      >
        {text}
      </a>
    </li>
  )
}

const Footer = () => {
  const ref = useRef<null | HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      gsap.fromTo(
        element.querySelectorAll('.footer-top'),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector('.footer-app-btn'),
            start: 'top center',
            end: 'bottom top',
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.footer-middle'),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector('.footer-top'),
            start: 'bottom center',
          },
        }
      )

      gsap.fromTo(
        element.querySelectorAll('.footer-bottom'),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector('.footer-middle'),
            start: 'top center',
          },
        }
      )
    }
  }, [])

  return (
    <div className="footer-bg" ref={ref}>
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-grid">
            <div className="footer-logo-container">
              <a
                href="https://github.com/NeonNature"
                target="_blank"
                className="footer-logo"
              >
                <img src={Logo} alt="Logo of Deliver X" />
              </a>

              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut.
              </div>
            </div>
            <div className="footer-app-container">
              <div className="footer-app-btn">
                <a href="https://www.apple.com/app-store/" target="_blank">
                  <div className="icon apple"></div>
                  <div>Download for iOS</div>
                </a>
              </div>
              <div className="footer-app-btn">
                <a href="https://play.google.com/" target="_blank">
                  <div className="icon android"></div>
                  <div>Download for Android</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-nav-grid">
            <div className="footer-nav-menu">
              <div className="footer-nav-title">Menu</div>
              <div className="footer-nav-wrap">
                <ul>
                  <ListItem text="Home" />
                  <ListItem text="About" />
                  <ListItem text="Contact" />
                  <ListItem text="Blog" />
                  <ListItem text="Blog posts" />
                </ul>
                <ul>
                  <ListItem text="Plans" />
                  <ListItem text="Plan single" />
                  <ListItem text="Register" />
                </ul>
              </div>
            </div>
            <div className="footer-nav-utility">
              <div className="footer-nav-title">Utility pages</div>
              <div className="footer-nav-wrap">
                <ul>
                  <ListItem text="Start here" />
                  <ListItem text="Styleguide" />
                  <ListItem text="Password protected" />
                  <ListItem text="404 Not found" />
                  <ListItem text="Licenses" />
                  <ListItem text="Changelog" />
                  <ListItem text="Browse More Templates" special />
                </ul>
              </div>
            </div>
            <div className="footer-nav-place">
              <div className="footer-nav-title">Available in</div>
              <div className="footer-place-grid">
                <PlaceCard
                  image={Place1}
                  alt="Illustration of San Francisco"
                  text="San Francisco, CA"
                />
                <PlaceCard
                  image={Place2}
                  alt="Illustration of New York"
                  text="New York, NY"
                />
                <PlaceCard
                  image={Place3}
                  alt="Illustration of Los Angeles"
                  text="Los Angeles, CA"
                />
                <PlaceCard
                  image={Place4}
                  alt="Illustration of Seattle"
                  text="Seattle, WA"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright © Deliver X | Designed by{' '}
          <a href="https://github.com/NeonNature" target="_blank">
            BRIX Templates
          </a>{' '}
          - Powered by{' '}
          <a href="https://github.com/NeonNature" target="_blank">
            Webflow
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
