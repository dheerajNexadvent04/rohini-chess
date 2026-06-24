import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { COACHES } from '../data/coaches'

export default function Coach() {
  return (
    <Layout>
      <Helmet>
        <title>Coach - Rohini Chess Academy</title>
        <meta name="description" content="Meet the coaches at Rohini Chess Academy." />
      </Helmet>

      <Breadcrumb title="Coach" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div id="oContentBlock" className="col-lg-12">
              <div id="oMainContentBlock">
                <div className="page-content">
                  {COACHES.map((coach) => (
                    <div className="sub-category-box effect1" key={coach.name}>
                      <div className="content-area">
                        <div className="row">
                          <div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
                            <img alt={coach.name} className="img-responsive" src={coach.img} title={coach.name} />
                          </div>
                          <div className="col-md-9 col-sm-9 col-lg-9 col-xs-12 des">
                            <h2>{coach.name}</h2>
                            <p>{coach.bio}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing"></div>
    </Layout>
  )
}
