import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import Lightbox from '../components/Lightbox'
import useLightbox from '../hooks/useLightbox'

const TOURNAMENT_IMAGES = [
  '/uploaded_files/tournament_images/tournament_30_11_2019_00_12_21.jpg',
  '/uploaded_files/tournament_images/tournament_30_11_2019_00_12_28.jpg',
  '/uploaded_files/tournament_images/tournament_30_11_2019_00_12_40.jpg',
  '/uploaded_files/tournament_images/tournament_30_11_2019_00_12_50.jpg',
  '/uploaded_files/tournament_images/tournament_30_11_2019_00_13_02.jpg',
  '/uploaded_files/tournament_images/tournament_30_11_2019_00_13_14.jpg',
  '/uploaded_files/tournament_images/tournament_30_11_2019_00_13_26.jpg',
]

export default function Tournament() {
  const lightbox = useLightbox(TOURNAMENT_IMAGES)

  return (
    <Layout>
      <Helmet>
        <title>Tournament - Rohini Chess Academy</title>
        <meta name="description" content="Tournament - Rohini Chess Academy" />
      </Helmet>

      <Breadcrumb title="Tournament" />

      <div id="oMainBlock">
        <div className="container">
          <div className="row">
            <div id="oContentBlock" className="col-lg-12">
              <div id="oMainContentBlock">
                <div className="page-content">
                  <h2>RCA Diwali Bonanza Open Chess tournament 19- 20 October 2019</h2>
                  <p>
                    The RCA Diwali Bonnaza open chess tournament was held at Bansal Bhawan Sector -16 Rohini, New Delhi from 19 October to 20
                    October 2019.
                  </p>
                  <p>
                    A total number of 114 Players were participated out of this, 17 international rated players participated in the event
                    which was spread over two days with time control of 25 min+ 5 seconds increment from one move. The total fund prize of
                    the event was Rs. 25500/-
                  </p>
                  <p>
                    <strong>The tournament was played under Swiss System with 7 rounds.</strong>
                  </p>
                  <p>
                    Ist prize of the event of Rs 3100/+ trophy was logged to Mr. Samarath Gaba who is having an international rating of 1392,
                    Satyam Prakash secured 2nd position and Love Jindal secured 3rd position. Both Samrath and Satyam Prakash secured 6.5
                    points out of 7 rounds with better buccholz Samarth emerged Winner!!
                  </p>
                  <p>
                    Among other participants Akshat Bansal secured the first position in under 7, Aranav Kakkar secured first position in
                    under 9, Daevik Wadhwan secured first position in under 12, Sarthal Deshwal secured first position in under 15. Satakshi
                    got the best youngest child award of the tournament. Mr. H. S Verma got the best prize in Veteran Category, Vatsal Singla
                    secured Best RCA award, Sourabh Mishra secured award under Visually Challenged category while Sonu Bist secured best award
                    under specially abled category, Riya Rathi secured best prize under girls category.
                  </p>
                  <p>
                    The <strong>prize distribution ceremony was done by Mr. M. K Bansal (Owner of Bansal Bhawan),</strong> Our coaches of the
                    team, Mr. Anil Shivpuri, Mr. Hamid Hasan, Mr. Manohar lal, Mr. Vasudeven, Mr. Sunil Sharma, Dr. Shilpi Jain and Mr. Sachin
                    Jain (Tournament Director)
                  </p>
                  <p>
                    All in all, it was a great experience for the team and students got a good opportunity to display their skills. It has
                    assured us that chess is a game wherein children learn to be responsible for their actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container gallery-grid">
        {TOURNAMENT_IMAGES.map((src, i) => (
          <div className="col-md-4 col-sm-4 col-lg-4 col-xs-12 img-box" key={src}>
            <button type="button" className="example-image-link" onClick={() => lightbox.open(i)} style={{ border: 0, padding: 0, background: 'none' }}>
              <img className="example-image" src={src} alt="Tournament" title="Tournament" />
            </button>
          </div>
        ))}
      </div>

      <Lightbox images={TOURNAMENT_IMAGES} index={lightbox.index} onClose={lightbox.close} onPrev={lightbox.prev} onNext={lightbox.next} />
    </Layout>
  )
}
