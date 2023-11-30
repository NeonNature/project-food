import '../styles/header.scss'
import Logo from '../assets/images/logo.svg'

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
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div className="header-grid">
          <div className="header-logo">
            <a href="#">
              <img src={Logo} alt="Deliver X Webflow Template - Logo" />
            </a>
          </div>
        </div>

        <div className="header-nav-wrap">
          <nav>
            <ul>
              <ListItem text="Home" />
              <ListItem text="About" current />
              <ListItem text="Pricing" />
              <ListItem text="Pages" />
            </ul>
          </nav>
          <div className="header-cart">Cart(0)</div>
        </div>
      </div>
    </div>
  )
}

export default Header
