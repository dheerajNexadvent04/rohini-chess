import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function CompanyProfile() {
  return (
    <Layout>
      <Helmet>
        <title>Company Profile - Rohini Chess Academy</title>
        <meta name="description" content="Rohini Chess Academy is affiliated to Delhi Chess Association." />
      </Helmet>

      <Breadcrumb title="Company Profile" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div id="oContentBlock" className="col-lg-12">
              <div id="oMainContentBlock">
                <div className="page-content">
                  <p>
                    <img
                      src="/rr9.jpeg"
                      alt="About Rohini Chess Academy"
                      title="About Rohini Chess Academy"
                      className="inline-float-img"
                      style={{ float: 'right', padding: '0 0 15px 15px' }}
                    />
                  </p>
                  <p>
                    <strong>Rohini Chess Academy is affiliated to Delhi Chess Association. </strong>
                    Rohini Chess Academy takes the fundamental principles of Chess education and applies them to today&apos;s young and bright
                    children. With experienced coach and scientific training (chess openings, chess endgames, etc.) program, we are confident
                    to educate tomorrow&apos;s Chess wizards. Rohini Chess Academy is providing chess classes online or offline in various
                    schools in delhi, NCR and other places in India and Abroad.
                  </p>
                  <h2>Career opportunities</h2>
                  <p>
                    <strong>FIDE / AICF / DCA Tournaments</strong>
                  </p>
                  <p>
                    There are several FIDE/AICF rated chess tournaments which happens regularly across India and special Delhi Chess
                    Association tournaments in Delhi. Price money are INR &gt;10 Lacs and individual highest prices are as high as INR 1.25
                    lacs.
                  </p>
                  <p>
                    <strong>School Tournaments</strong>
                  </p>
                  <p>Every year there are AICF (All India Chess Federation) and Delhi Chess Association (DCA) special School team tournaments.</p>
                  <p>
                    <strong>
                      Our Partnership with Leading Schools &amp; Learning Institutes:
                      <br />
                    </strong>
                    <br />
                    1. Apeejay School, Pitampura, Saket, Sheikh Sarai, Noida, Faridabad, Mumbai and Jalandhar.
                  </p>
                  <p>2. Shri Ram Global Pre-School(s) in Delhi</p>
                  <p>3. Kingdom of Kids, Delhi &amp; Gurgaon</p>
                  <p>4. GD Goenka La Petite, Delhi</p>
                  <p>5. The Vasant Pre-School, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
