import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import LeadForm from '../components/LeadForm'

export default function ContactUs() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Rohini Chess Academy</title>
        <meta name="description" content="Contact Us" />
      </Helmet>

      <Breadcrumb title="Contact Us" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" id="oContentBlock">
              <div id="oMainContentBlock">
                <div id="ot-maincontent">
                  <div className="page-content">
                    <LeadForm formName="Contact Us" sourceSection="Contact Us Page" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5" id="ot-sidebar2">
              <div className="custom-right-box">
                <div className="contact-form">
                  <h2>Contact Details</h2>
                  <p className="f15">
                    <strong>Contact Person</strong>: Dr Shilpi Jain
                  </p>
                  <p className="f15">
                    <strong>Address</strong>: 140, 2nd Floor, Pocket 21, Sector 24 Rohini, New Delhi 110085 India
                  </p>
                  <p className="f15">
                    <strong>Mobile No.</strong>: +91 8447992702, +91 9582135221
                  </p>
                  <p className="f15">
                    <strong>Email ID</strong>:
                  </p>
                  <p className="f15">Sckoolchess@gmail.com</p>
                  <iframe
                    title="Rohini Chess Academy location"
                    allowFullScreen
                    frameBorder="0"
                    height="270"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.745743412769!2d77.09482151498945!3d28.72714358654364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06c67cdd8185%3A0xbe71aa924db2a797!2sRohini+Chess+Academy!5e0!3m2!1sen!2sin!4v1526993297824"
                    style={{ border: 0, marginTop: 10 }}
                    width="100%"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
