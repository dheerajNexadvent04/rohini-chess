import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import ScheduleClassForm from '../components/ScheduleClassForm'

const FEATURES = [
  {
    icon: 'fa-calendar-check-o',
    title: 'Flexible Scheduling',
    text: 'Pick a date and time that fits your lifestyle perfectly.',
  },
  {
    icon: 'fa-clock-o',
    title: 'Live Interactive Sessions',
    text: 'Real-time game analysis and tailored guidance from top chess coaches.',
  },
  {
    icon: 'fa-trophy',
    title: 'Expert FIDE Coaches',
    text: 'Learn from titled players with decades of competitive experience in chess.',
  },
]

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
                      <div className="contact-form book-info-card">
                        <span className="book-info-eyebrow">Join Rohini Chess Academy Online</span>
                        <h2>Schedule Your Online Class</h2>
                        <p className="book-info-desc">
                          Step onto the board with grandmaster strategies. Fill out the form to secure your spot in
                          our highly sought-after online chess sessions across Delhi NCR.
                        </p>
                        <ul className="book-info-features">
                          {FEATURES.map((feature) => (
                            <li key={feature.title}>
                              <span className="book-info-icon">
                                <i className={`fa ${feature.icon}`} aria-hidden="true"></i>
                              </span>
                              <div>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
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
