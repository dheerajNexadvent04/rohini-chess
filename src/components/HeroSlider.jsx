import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

const SLIDES = [
  '/rr1.jpeg',
  '/rr2.jpeg',
  '/rr3.jpeg',
  '/rr4.jpeg',
  '/rr5.jpeg',
  '/rr6.jpeg',
  '/rr7.jpeg',
  '/rr8.jpeg',
  '/rr9.jpeg',
]

export default function HeroSlider() {
  return (
    <div id="home-slider">
      <div className="homeslider">
        <div className="slider-wrapper theme-default">
          <Swiper
            className="hero-swiper"
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {SLIDES.map((src) => (
              <SwiperSlide key={src}>
                <img src={src} alt="Rohini Chess Academy (Affiliated to Delhi Chess Association)" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
