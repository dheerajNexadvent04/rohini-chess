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
              <p className="copyright"><small>Copyright &#169; 2026 <strong> Rohini Chess Academy</strong>. All rights reserved</small></p>

              <div className="vcard">
                <div className="footer-contact">
                  <ul className="socials">
                    <a href="https://www.facebook.com/rohinichessacademy/" target="_blank" rel="noreferrer" className="socialicon-box" title="Facebook">
                      <img src="/facebooklogo.png" className="socialicons" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="socialicon-box" title="Twitter">
                      <img src="/twitterlogo.png" className="socialicons" alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/sckoolchess?igsh=bzMwaTB0YWw2d2Iz" target="_blank" rel="noreferrer" className="socialicon-box" title="Instagram">
                      <img src="/instagramlogo.png" className="socialicons" alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/@sckoolchess" target="_blank" rel="noreferrer" className="socialicon-box" title="YouTube">
                      <img src="/youtubelogo.png" className="socialicons" alt="YouTube" />
                    </a>
                    <a href="https://www.linkedin.com/company/sckoolchess/" target="_blank" rel="noreferrer" className="socialicon-box" title="LinkedIn">
                      <img src="/linkedinlogo.png" className="socialicons" alt="LinkedIn" />
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer-partners-row">
          <div className="col-lg-12">
            <div className="footer-partners">
              <span className="footer-partner-item">
                <img src="/bni.jpeg" alt="Proud BNI Member" />
                <span>Proud BNI Member</span>
              </span>
              <a href="https://www.sckoolchess.com/" target="_blank" rel="noreferrer" className="footer-partner-item">
                <img src="/fevicon-sckoolchess.png" alt="SckoolChess" />
                <span>SckoolChess</span>
              </a>
              <a href="https://nepzo.in/" target="_blank" rel="noreferrer" className="footer-partner-item">
                <img src="/nepzo-removebg-preview.png" alt="Nepzo" />
                <span>Nepzo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
