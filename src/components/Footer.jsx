import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img className="footer-logo" src="/img1/logo-edit.png" alt="Rohini Chess Academy" title="Rohini Chess Academy" />
          </div>

          <div className="col-lg-2">
            <div className="innerpad">
              <nav className="footer-nav">
                <ul>
                  <li className="first"><Link to="/" title="Home">Home</Link></li>
                  <li><Link to="/company-profile" title="Company Profile">Company Profile</Link></li>
                  <li className="last"><Link to="/services" title="Services">Services</Link></li>
                  <li className="last"><Link to="/tournament" title="Tournament">Tournament</Link></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="innerpad">
              <nav className="footer-nav">
                <ul>
                  <li><Link to="/gallery" title="Gallery">Gallery</Link></li>
                  <li><Link to="/contact-us" title="Contact us">Contact us</Link></li>
                  <li><Link to="/market-area" title="Market Area">Market Area</Link></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="right clearfix">
              <p className="copyright"><small>Copyright &#169; 2018 <strong> Rohini Chess Academy</strong>. All rights reserved</small></p>

              <div className="vcard">
                <div className="footer-contact">
                  <ul className="socials">
                    <a href="https://www.facebook.com/rohinichessacademy/" target="_blank" rel="noreferrer" style={{ float: 'left', paddingRight: 7 }} title="Facebook">
                      <img src="/img1/facebook.jpg" className="socialicons" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" style={{ float: 'left', paddingRight: 7 }} title="Twitter">
                      <img src="/img1/twitter.jpg" className="socialicons" alt="Twitter" />
                    </a>
                  </ul>

                  <h3 className="fn">
                    Designed &amp; Promoted by Webpulse -{' '}
                    <a href="http://www.webpulseindia.com/" title="Website Designing Company India" target="_blank" rel="noreferrer" style={{ color: '#FFF' }}>
                      Web Designing Company India
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
