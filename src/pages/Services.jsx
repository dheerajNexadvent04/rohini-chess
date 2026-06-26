import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import LeadForm from '../components/LeadForm'

export default function Services() {
  return (
    <Layout>
      <Helmet>
        <title>Structured Chess Courses in Rohini, Chess Academy Curriculum India</title>
        <meta
          name="keywords"
          content="Chess Academy Curriculum, Structured Chess Courses, Chess Academy Curriculum in Rohini, Structured Chess Courses in India, Best Chess Academy Curriculum in Delhi, Best Structured Chess Courses"
        />
        <meta
          name="description"
          content="Rohini Chess Academy is one of the most popular Chess Academy Curriculum in Delhi, provide Structured Chess Courses, Chess Courses, Chess Training, Chess Classes for 3 months, 6 months and 1 Year available for Beginners, Intermediate and Advance players. For more details call us at +91 9582135221"
        />
      </Helmet>

      <Breadcrumb title="Services" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div id="oContentBlock" className="col-lg-12">
              <div id="oMainContentBlock">
                <div className="page-content">
                  <div className="service-promo-banner">
                    <img
                      src="/service page image.jpeg"
                      alt="Rohini Chess Academy - Chess Classes for Kids & Beginners, age 6-12 years, 3 month course"
                      title="Chess Classes for Kids & Beginners"
                    />
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <p>
                        <u>
                          <strong>
                            Regular Courses (8 classes in a month (i.e. 2 classes per week):
                            <br />
                          </strong>
                        </u>
                      </p>
                      <p>
                        <strong>
                          We have a well designed and structured Chess courses for 3 months, 6 months and 1 Year. Separate batches are
                          available for Beginners, Intermediate and Advance players
                          <br />
                        </strong>
                      </p>
                      <p>
                        <strong>
                          Key concepts covered as part of our Chess curriculum:
                          <br />
                        </strong>
                      </p>
                      <p>
                        <strong>
                          Opening Systems:
                          <br />
                        </strong>
                      </p>
                      <p>
                        Ruy Lopez, Guico Piano, Queen Gambit, Kings Indian, Sicilian Defence, French Defence, etc. (Pawn Structure,
                        Development, Traps, Grandmaster Game Analysis)
                      </p>
                      <p>
                        <strong>
                          Middle Game:
                          <br />
                        </strong>
                      </p>
                      <p>
                        Combination, Mating Pattern, Positional Analysis, Tactics (Deflection, Decoy, Pin, Fork, Skewer, Windmill, Open files,
                        Bishop Pair, Outpost, etc.)
                      </p>
                      <p>
                        <strong>
                          End Game:
                          <br />
                        </strong>
                      </p>
                      <p>
                        - King and Pawn endings, King and Rook endings, King and Queen/Bishop/Knight endings (Opposition, Outflanking,
                        Zugzwang, Lucena &amp; Philidor position, etc.)
                      </p>
                      <p>
                        <strong>Our Partnership with Leading Schools &amp; Learning Institutes:</strong>
                      </p>
                      <p>
                        <strong>Apeejay School, Noida</strong>
                      </p>
                      <p>Film City, Sector 16A, Noida</p>
                      <p>
                        <strong>Shri Ram Global Pre-School(s) in Delhi</strong>
                      </p>
                      <p>1). Sector 13, Rohini, Behind Bhagwati Hospital</p>
                      <p>2). A - 14, Shubham Enclave, Paschim Vihar</p>
                      <p>3). Block - A, Ashok Vihar, Phase II</p>
                      <p>4). 39/35, West Punjabi Bagh, Near Shivaji Park Metro Station</p>
                      <p>5). Phase 2, Sector - 18 A, Dwarka</p>
                      <p>6). 21, South Patel Nagar, Near Metro Pillar No. 192</p>
                      <p>
                        <strong>
                          Kingdom of Kids, Delhi &amp; Gurgaon
                          <br />
                        </strong>
                        1). 8, KU Block, Pitampura, N. Delhi - 63
                      </p>
                      <p>2). NS 7, Orchid Island, Sec-51, Gurgaon</p>
                      <p>
                        <strong>
                          GD Goenka La Petite, Delhi
                          <br />
                        </strong>
                        NS-2 RP Block, Pitampura, Near ICICI Bank (Opposite Pitampura Sports complex)
                      </p>
                      <p>
                        <strong>
                          The Vasant Pre-School, Delhi
                          <br />
                        </strong>
                        NS-1, HAF, Pocket-A, Phase-1, Sector 11, Dwarka
                      </p>
                    </div>

                    <div className="col-lg-4">
                      <img
                        src="/rr8.jpeg"
                        title="Services"
                        alt="Services"
                        width="100%"
                        className="right-img"
                      />
                    </div>
                  </div>
                </div>

                <LeadForm formName="Services Enquiry" sourceSection="Services Page" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
