import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Lightbox from './Lightbox'
import useLightbox from '../hooks/useLightbox'

const SERVICE_PROMOS = [
  { src: '/service 1.jpeg', alt: 'Special offer - offline chess classes pricing', caption: 'Special Offer' },
  { src: '/service2.jpeg', alt: 'Book a free trial online chess class', caption: 'Free Trial Class' },
  { src: '/service3.jpeg', alt: 'Top chess institution in Rohini, Delhi', caption: 'Why Choose Us' },
  { src: '/service4.jpeg', alt: 'How our quality is a benchmark in chess education', caption: 'Our Quality' },
]
const SERVICE_PROMO_IMAGES = SERVICE_PROMOS.map((item) => item.src)

export default function ServicePromoCarousel() {
  const swiperRef = useRef(null)
  const lightbox = useLightbox(SERVICE_PROMO_IMAGES)

  return (
    <div className="service-promo-section">
      <h2 className="service-promo-heading">Special Offers &amp; Why Choose Us</h2>

      <div className="service-promo-carousel-wrap">
        <button
          type="button"
          className="service-promo-nav-btn prev"
          aria-label="Previous"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          &#8249;
        </button>

        <Swiper
          className="service-promo-swiper"
          modules={[Autoplay, Pagination]}
          loop
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {SERVICE_PROMOS.map((item, i) => (
            <SwiperSlide key={item.src}>
              <button type="button" className="service-promo-item" onClick={() => lightbox.open(i)}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="service-promo-caption">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                  {item.caption}
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="service-promo-nav-btn next"
          aria-label="Next"
          onClick={() => swiperRef.current?.slideNext()}
        >
          &#8250;
        </button>
      </div>

      <Lightbox images={SERVICE_PROMO_IMAGES} index={lightbox.index} onClose={lightbox.close} onPrev={lightbox.prev} onNext={lightbox.next} />
    </div>
  )
}
