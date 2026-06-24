import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import Lightbox from '../components/Lightbox'
import useLightbox from '../hooks/useLightbox'
import { GALLERY_ITEMS, GALLERY_IMAGES } from '../data/galleryImages'

export default function Gallery() {
  const lightbox = useLightbox(GALLERY_IMAGES)

  return (
    <Layout>
      <Helmet>
        <title>Gallery - Rohini Chess Academy</title>
        <meta name="description" content="Gallery - Rohini Chess Academy" />
      </Helmet>

      <Breadcrumb title="Gallery" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div id="oContentBlock" className="col-lg-12">
              <div id="oMainContentBlock">
                <div id="ot-maincontent">
                  <div className="page-content gallery-grid">
                    {GALLERY_ITEMS.map((item, i) => (
                      <div className="col-md-4 col-sm-4 col-lg-4 col-xs-12 img-box" key={item.src}>
                        <button type="button" className="example-image-link" onClick={() => lightbox.open(i)} style={{ border: 0, padding: 0, background: 'none' }}>
                          <img className="example-image" src={item.src} alt={item.heading || 'Gallery'} />
                        </button>
                        <div className="techno-de">
                          <p className="heading">{item.heading}</p>
                          <p className="disc">{item.disc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox images={GALLERY_IMAGES} index={lightbox.index} onClose={lightbox.close} onPrev={lightbox.prev} onNext={lightbox.next} />
    </Layout>
  )
}
