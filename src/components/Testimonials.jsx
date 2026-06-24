import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { TESTIMONIALS } from '../data/testimonials'

export default function Testimonials() {
  const swiperRef = useRef(null)

  return (
    <div className="testimonial-section">
      <h2 className="group-title"> <span>What Parents &amp; Students Say</span> </h2>

      <div className="testimonial-carousel-wrap">
        <button
          type="button"
          className="testimonial-nav-btn prev"
          aria-label="Previous testimonial"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          &#8249;
        </button>

        <Swiper
          className="testimonial-swiper"
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={item.image} alt="Student testimonial" />
                </div>
                <div className="testimonial-body">
                  <div className="testimonial-stars" aria-hidden="true">★★★★★</div>
                  <p className="testimonial-rating">
                    Rated <strong>5.0/5</strong> by 100+ Reviews
                  </p>
                  <h3 className="testimonial-title">{item.title}</h3>
                  <p className="testimonial-text">{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="testimonial-nav-btn next"
          aria-label="Next testimonial"
          onClick={() => swiperRef.current?.slideNext()}
        >
          &#8250;
        </button>
      </div>
    </div>
  )
}
