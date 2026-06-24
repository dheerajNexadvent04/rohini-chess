import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Faq from '../components/Faq'
import SchoolPartners from '../components/SchoolPartners'
import { SCHOOL_FAQS } from '../data/schoolFaqs'

export default function School() {
  return (
    <Layout>
      <Helmet>
        <title>Chess Association Tournaments in Delhi, Chess Coaching Classes India</title>
        <meta
          name="keywords"
          content="Chess Coaching Classes, Chess Coaching Classes in Rohini, Chess Association tournaments, Chess Association tournaments Services in India, Chess Coaching Classes, Chess Coaching Classes in Rohini"
        />
        <meta
          name="description"
          content="Rohini Chess Academy is one of the most popular Chess Coaching Classes in Delhi, provide Chess Association tournaments, Chess Courses, Chess Training, Chess Classes for 3 months, 6 months and 1 Year available for Beginners, Intermediate and Advance players. For more details call us at +91 8447992702."
        />
      </Helmet>

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div id="oContentBlock" className="col-lg-12">
              <div id="oMainContentBlock">
                <div className="page-content">
                  <h2 className="group-title"> <span>Our School Partners</span> </h2>
                  <SchoolPartners />
                </div>

                <Faq items={SCHOOL_FAQS} title="Frequently Asked Questions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
