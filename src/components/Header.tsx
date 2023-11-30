import '../styles/header.scss'
import Logo from '../assets/images/logo.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface ListItemProps {
  text: string
  current?: boolean
}

const ListItem = ({ text, current = false }: ListItemProps) => {
  return (
    <li>
      <a
        href="https://github.com/NeonNature"
        className={current ? 'current' : ''}
      >
        {text}
      </a>
    </li>
  )
}

const Header = () => {
  const ref = useRef<null | HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      gsap.fromTo(
        element.querySelectorAll('.header-content'),
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: element.querySelector('.header-content'),
          },
        }
      )
    }
  }, [])
  return (
    <div className="header-wrapper" ref={ref}>
      <div className="header-content">
        <div className="header-grid">
          <div className="header-logo">
            <a href="#">
              <img src={Logo} alt="Deliver X Webflow Template - Logo" />
            </a>
          </div>

          <div className="header-nav-wrap">
            <nav>
              <ul>
                <ListItem text="Home" />
                <ListItem text="About" current />
                <ListItem text="Pricing" />
                <li>
                  <a href="#">
                    Pages<div className="header-pages-icon"></div>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-cart">Cart(0)</div>
            <div className="header-buttons">
              <div className="download">
                <a href="#">Download app</a>
              </div>
              <div className="register">
                <a href="#">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
