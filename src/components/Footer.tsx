import '../styles/footer.scss'
import Logo from '../assets/images/logo.svg'

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
  return (
    <>
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
    </>
  )
}

export default Footer
