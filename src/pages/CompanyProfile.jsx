import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function CompanyProfile() {
  return (
    <Layout>
      <Helmet>
        <title>Company Profile - Rohini Chess Academy</title>
        <meta name="description" content="Rohini Chess Academy is affiliated to Delhi Chess Association." />
      </Helmet>

      <Breadcrumb title="Company Profile" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div id="oContentBlock" className="col-lg-12">
              <div id="oMainContentBlock">
                <div className="page-content">
                  <p>
                    <img
                      src="/rr9.jpeg"
                      alt="About Rohini Chess Academy"
                      title="About Rohini Chess Academy"
                      className="inline-float-img"
                      style={{ float: 'right', padding: '0 0 15px 15px' }}
                    />
                  </p>
                  <p>
                    <strong>Rohini Chess Academy is affiliated to Delhi Chess Association. </strong>
                    Rohini Chess Academy takes the fundamental principles of Chess education and applies them to today&apos;s young and bright
                    children. With experienced coach and scientific training (chess openings, chess endgames, etc.) program, we are confident
                    to educate tomorrow&apos;s Chess wizards. Rohini Chess Academy is providing chess classes online or offline in various
                    schools in delhi, NCR and other places in India and Abroad.
                  </p>
                  <h2>Career opportunities</h2>
                  <p>
                    <strong>FIDE / AICF / DCA Tournaments</strong>
                  </p>
                  <p>
                    There are several FIDE/AICF rated chess tournaments which happens regularly across India and special Delhi Chess
                    Association tournaments in Delhi. Price money are INR &gt;10 Lacs and individual highest prices are as high as INR 1.25
                    lacs.
                  </p>
                  <p>
                    <strong>School Tournaments</strong>
                  </p>
                  <p>Every year there are AICF (All India Chess Federation) and Delhi Chess Association (DCA) special School team tournaments.</p>
                  <p>
                    <strong>
                      Our Partnership with Leading Schools &amp; Learning Institutes:
                      <br />
                    </strong>
                    <br />
                    1. Apeejay School, Pitampura, Saket, Sheikh Sarai, Noida, Faridabad, Mumbai and Jalandhar.
                  </p>
                  <p>2. Shri Ram Global Pre-School(s) in Delhi</p>
                  <p>3. Kingdom of Kids, Delhi &amp; Gurgaon</p>
                  <p>4. GD Goenka La Petite, Delhi</p>
                  <p>5. The Vasant Pre-School, Delhi</p>
                </div>

                <div className="director-message">
                  <h2>Director&apos;s Message</h2>

                  <div className="director-profile">
                    <img src="/director.jpeg" alt="Sachin Jain, Director - Rohini Chess Academy" className="director-photo" />
                    <div>
                      <strong>Sachin Jain</strong>
                      <span>Director, Rohini Chess Academy Pvt. Ltd.</span>
                    </div>
                  </div>

                  <p>
                    When I founded <strong>Rohini Chess Academy</strong> over a decade ago, I was driven by a simple belief
                    that every child deserves the opportunity to learn how to think independently, solve problems with
                    confidence, and develop the discipline to succeed in life. I never wanted to build just another chess
                    coaching centre. My aspiration was to create an institution that parents could trust, students could
                    proudly partner with, and students could remember as a place that transformed the way they think. As I
                    meet parents across <strong>Rohini, Pitampura, Paschim Vihar, Dwarka, Noida, Indirapuram, Gurgaon, and
                    Delhi NCR</strong>, I often hear the same question: <em>How can we prepare our children for a future
                    that demands creativity, critical thinking, resilience, and sound decision-making?</em> In my
                    experience, chess provides one of the strongest foundations for developing these qualities. Every
                    move encourages patience, planning, analysis, responsibility, and confidence&mdash;lessons that stay
                    with a child long after a game is over.
                  </p>

                  <p>
                    Over the last ten years, Rohini Chess Academy has had the privilege of mentoring thousands of young
                    learners. Many of our students have represented their schools, won district and state
                    championships, and more than twenty have achieved prestigious <strong>FIDE Ratings</strong>. While
                    these accomplishments make us proud, our greatest achievement is seeing children become more
                    confident learners, better decision-makers, and responsible individuals. Our commitment to quality
                    has remained unwavering since the beginning. Rohini Chess Academy operates as an{' '}
                    <strong>ISO 9001:2015 Certified Private Limited Company</strong>, is affiliated with the{' '}
                    <strong>Delhi Chess Association</strong>, and is supported by experienced{' '}
                    <strong>FIDE-rated coaches</strong>. These milestones reflect our dedication to professionalism,
                    transparency, and continuous improvement.
                  </p>

                  <p>
                    As education continues to evolve, our vision has expanded beyond the academy. Through our{' '}
                    <strong>School Partnership Initiative</strong> and <strong>Chess in School Program</strong>, we work
                    closely with schools to integrate structured chess education into the learning environment. Our
                    programs are designed not only to teach the game but also to enhance concentration, logical
                    reasoning, emotional intelligence, collaboration, and problem-solving abilities. We partner with
                    school leaders and educators to deliver curriculum support, teacher orientation, inter-house
                    competitions, tournaments, assessments, and measurable progress tracking. This approach aligns
                    naturally with the vision of <strong>NEP 2020</strong>, promoting experiential learning,
                    competency-based education, critical thinking, and holistic development. We believe schools deserve
                    partners who understand education as deeply as they understand chess, and we are committed to
                    creating meaningful and measurable outcomes for every institution we serve.
                  </p>

                  <p>
                    Looking ahead, my vision is to establish Rohini Chess Academy as one of India&apos;s most respected
                    institutions for chess education while expanding quality coaching and school partnerships across{' '}
                    <strong>Delhi NCR</strong> and beyond. We will continue to innovate, raise our standards, and invest
                    in every student&apos;s journey because every child deserves the opportunity to discover his or her
                    true potential. I sincerely thank every parent, student, coach, school leader, and well-wisher who
                    has been a part of this remarkable journey. Your trust inspires us to improve every single day. I
                    warmly invite you to become a part of the Rohini Chess Academy family and experience our commitment
                    to excellence, integrity, and lifelong learning. <strong>Every Move Shapes a Better Future.</strong>
                  </p>

                  <p className="director-signature">
                    Sachin Jain
                    <br />
                    Director
                    <br />
                    Rohini Chess Academy Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
