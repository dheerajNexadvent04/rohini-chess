import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

const SLIDES = [
  '/img1/banners/rohinichessacademy1.jpg',
  '/img1/banners/rohinichessacademy2.jpg',
  '/img1/banners/rohinichessacademy4.jpg',
  '/img1/banners/rohinichessacademy5.jpg',
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
