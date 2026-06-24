import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/company-profile', label: 'Company Profile' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/book-an-online', label: 'Book Online' },
  { to: '/coach', label: 'Coach' },
  { to: '/school', label: 'School' },
  { to: '/career', label: 'Career' },
  { to: '/contact-us', label: 'Contact Us' },
]

export default function Header() {
  const [collapsed, setCollapsed] = useState(true)
  const [shrink, setShrink] = useState(false)

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`header header-sticky${shrink ? ' header-fixed-shrink' : ''}`}>
      <div className="container">
        <Link className="logo" to="/">
          <img
            src="/img1/logo-edit.png"
            alt="Rohini Chess Academy (Affiliated to Delhi Chess Association)"
            title="Rohini Chess Academy (Affiliated to Delhi Chess Association)"
          />
        </Link>

        <div className="topbar hidden-xs">
          <ul className="loginbar pull-right">
            <li>Dr. Shilpi. Jain</li>
            <li>
              <i className="fa fa-phone"></i>
              <a href="tel:+91-8447992702">+91-8447992702</a>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setCollapsed((c) => !c)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="fa fa-bars"></span>
        </button>
      </div>

      <div className={`collapse navbar-collapse mega-menu navbar-responsive-collapse${collapsed ? '' : ' in'}`}>
        <div className="container">
          <ul className="nav navbar-nav">
            {NAV_LINKS.map((link, i) => (
              <li key={link.to} className={i === 0 ? 'frist' : undefined} onClick={() => setCollapsed(true)}>
                <NavLink to={link.to} title={link.label} className={({ isActive }) => (isActive ? 'active' : undefined)} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
