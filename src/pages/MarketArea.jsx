import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

const AREAS = [
  'Pitampura',
  'Punjabi Bagh',
  'Paschim Vihar',
  'Dwarka',
  'Shalimar Bagh',
  'Ashok Vihar',
  'Nagloi',
  'Narela',
  'Rohini',
  'Budh Vihar',
  'Avantika',
]

export default function MarketArea() {
  return (
    <Layout>
      <Helmet>
        <title>Market Area - Rohini Chess Academy</title>
        <meta name="description" content="Local Delhi areas served by Rohini Chess Academy." />
      </Helmet>

      <Breadcrumb title="Market Area" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div id="oContentBlock" className="col-lg-12">
              <div id="oMainContentBlock">
                <div className="page-content">
                  <h2 className="group-title"> <span>Areas We Serve</span> </h2>
                  <p className="market-area-intro">
                    Rohini Chess Academy provides chess coaching - both online and offline - across these localities in Delhi NCR.
                  </p>
                  <div className="area-chip-grid">
                    {AREAS.map((area) => (
                      <span className="area-chip" key={area}>
                        <span className="area-chip-icon" aria-hidden="true">📍</span>
                        {area}
                      </span>
                    ))}
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
