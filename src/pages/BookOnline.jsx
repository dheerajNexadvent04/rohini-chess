import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import LeadForm from '../components/LeadForm'

export default function BookOnline() {
  return (
    <Layout>
      <Helmet>
        <title>Book an Online Class - Rohini Chess Academy</title>
        <meta name="description" content="Book an Online Class" />
      </Helmet>

      <Breadcrumb title="Book an Online Class" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div id="oContentBlock" className="col-lg-12">
              <div id="oMainContentBlock">
                <div className="page-content">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                    <LeadForm formName="Book an Online Class" sourceSection="Book an Online Class Page" />

                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 mr">
                      <div className="box effect1">
                        <h2>Book an Online Class</h2>
                      </div>
                    </div>

                    <center>
                      <a href="https://coaching.rohinichessacademy.com/" target="_blank" rel="noreferrer">
                        <button type="button" className="btn btn-info" style={{ backgroundColor: '#275581', margin: 20, fontSize: 17 }}>
                          Online Coaching
                        </button>
                      </a>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
