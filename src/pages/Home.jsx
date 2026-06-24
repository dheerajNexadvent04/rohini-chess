import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import HeroSlider from '../components/HeroSlider'
import GalleryCarousel from '../components/GalleryCarousel'
import FreeClassModal from '../components/FreeClassModal'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'
import { GALLERY_IMAGES } from '../data/galleryImages'
import { SCHOOL_FAQS } from '../data/schoolFaqs'

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Chess Academy in Delhi ,Best Chess Classes and Coaching in Rohini</title>
        <meta
          name="keywords"
          content="Best Chess Training Centre, Rohini Chess Academy, Chess Training Centre in Rohini, Chess coaching Classes, Genius Chess Academy in India, Perfect Chess Trainer in Rohini"
        />
        <meta
          name="description"
          content="Rohini Chess Academy is one of the most popular Chess Training Centre in Delhi, provide Chess Courses, Chess Training, Chess Classes for 3 months, 6 months and 1 Year available for Beginners, Intermediate and Advance players. For more details call us at +91 8447992702."
        />
      </Helmet>

      <FreeClassModal />

      <HeroSlider />

      <section className="wrap-dark-color">
        <div className="container">
          <div className="col-md-12">
            <h1 className="heading-1">&quot;We make your Chess Dreams a Reality&quot;</h1>
          </div>
        </div>
      </section>

      <section className="block gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="award-winning-shippment">
                <div className="row">
                  <div className="col-md-8">
                    <div className="award-winning">
                      <div className="title2">
                        <strong style={{ textTransform: 'uppercase' }}>Welcome to Rohini Chess Academy</strong>
                        <h2>Rohini Chess Academy is affiliated to Delhi Chess Association.</h2>
                      </div>
                      <span className="big-bg-text hidden-xs">Rohini</span>
                      <p>
                        Want to give wings to your&apos;s child dream to make it big in the world of Chess!!.Come to us , As we are Known for
                        the <strong>Best Chess Acdemy in Delhi .</strong>At Rohini Chess Academy, we understand that every child is special
                        and gifted and with right coaching and guidance can reach his/her true potential. We aim to work in the same direction
                        with the able guidance of experienced chess coach.If you are looking for the{' '}
                        <strong>Best Chess Classes in Rohini</strong>, Call us now on{' '}
                        <span style={{ color: '#222', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 'small' }}>8447992702.</span>
                      </p>
                      <div className="row">
                        <div className="col-md-6 md-margin-bottom-50">
                          <div className="testimonials-info rounded-bottom">
                            <img className="rounded-x" src="/img1/img-2.png" alt="" />
                            <div className="testimonials-desc">
                              <strong>Is it fast?</strong>
                              <p>
                                We cater separate batches for &quot;Beginners&quot;, &quot;Intermediate&quot;, &amp; &quot;Tournament&quot;
                                players - to ensure each group gets its fair treatment &amp; progress plan. We also have fast track course for
                                AICF tournament preparation.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 md-margin-bottom-50">
                          <div className="testimonials-info rounded-bottom">
                            <img className="rounded-x" src="/img1/img-3.png" alt="" />
                            <div className="testimonials-desc">
                              <strong>Is it personal?</strong>
                              <p>
                                Our main focus is to give attention to each child&apos;s learning capability and regularly review his
                                performance report. We aim to see every child enrolled with us gets higher ELO ratings points.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="home-box right">
                      <p>
                        <img src="/img1/img-1.jpg" title="Rohini Chess Academy in Rohini" alt="Rohini Chess Academy in Rohini" width="100%" />
                      </p>
                      <div className="title2">
                        <h2>Is it expensive?</h2>
                      </div>
                      <p>
                        We charge very nominal fees and give right amount of time and focus to every child. Just visit us once and we can help
                        you understand benefits modern Chess can offer including FIDE/AICF/DCA Tournaments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-top home-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-12 col-sm-12">
              <div className="page-product-box">
                <h2 className="group-title">
                  {' '}
                  <span>Our Gallery</span>{' '}
                </h2>
                <GalleryCarousel images={GALLERY_IMAGES} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container home-section">
        <div className="row">
          <div className="col-xs-12 col-lg-12 col-sm-12">
            <Testimonials />
          </div>
        </div>
      </div>

      <div className="container home-section">
        <div className="row">
          <div className="col-xs-12 col-lg-12 col-sm-12">
            <Faq items={SCHOOL_FAQS} title="Frequently Asked Questions" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
