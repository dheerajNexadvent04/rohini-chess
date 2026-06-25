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
    const onScroll = () => setShrink(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`header header-sticky${shrink ? ' header-fixed-shrink' : ''}`}>
      <div className="header-main">
        <div className="container header-main-inner">
          <Link className="logo" to="/">
            <img
              src="/img1/logo-edit.png"
              alt="Rohini Chess Academy (Affiliated to Delhi Chess Association)"
              title="Rohini Chess Academy (Affiliated to Delhi Chess Association)"
            />
          </Link>

          <button
            type="button"
            className={`navbar-toggle${collapsed ? '' : ' is-open'}`}
            onClick={() => setCollapsed((c) => !c)}
            aria-label="Toggle navigation"
            aria-expanded={!collapsed}
          >
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
          </button>

          <div className={`collapse navbar-collapse mega-menu navbar-responsive-collapse${collapsed ? '' : ' in'}`}>
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

          <div className="header-contact hidden-xs">
            <span className="topbar-name">
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              Dr. Shilpi. Jain
            </span>
            <a className="topbar-phone" href="tel:+91-8447992702">
              <i className="fa fa-phone" aria-hidden="true"></i>
              +91-8447992702
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
