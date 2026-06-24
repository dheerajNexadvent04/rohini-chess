import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import LeadForm from '../components/LeadForm'

export default function Career() {
  return (
    <Layout>
      <Helmet>
        <title>Career - Rohini Chess Academy</title>
        <meta name="description" content="Career" />
      </Helmet>

      <Breadcrumb title="Career" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" id="oContentBlock">
              <div id="oMainContentBlock">
                <div className="page-content">
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <LeadForm formName="Career" sourceSection="Career Page" />
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 mr">
                    <div className="box effect1">
                      <h2>Career</h2>
                      <p>
                        <span style={{ fontSize: 22 }}>
                          <strong>Current openings</strong>
                        </span>
                      </p>
                      <h1>1. Content Writer</h1>
                      <h1>2. Business Development cum Coordinator</h1>
                      <p>
                        <strong>Interested candidates, Kindly send your resume at coach@rohinichessacademy.com</strong>
                      </p>
                    </div>
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
