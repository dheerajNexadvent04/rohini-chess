import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import LeadForm from '../components/LeadForm'
import ScheduleClassForm from '../components/ScheduleClassForm'

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
                  <div className="row book-online-row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <LeadForm formName="Book an Online Class" sourceSection="Book an Online Class Page" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <ScheduleClassForm />
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
