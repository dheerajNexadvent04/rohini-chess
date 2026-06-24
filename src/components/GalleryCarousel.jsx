import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Lightbox from './Lightbox'
import useLightbox from '../hooks/useLightbox'

export default function GalleryCarousel({ images }) {
  const lightbox = useLightbox(images)

  return (
    <>
      <Swiper
        className="gallery-swiper product-list"
        modules={[Autoplay, Navigation]}
        navigation
        loop
        spaceBetween={20}
        autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 3 },
          1000: { slidesPerView: 5 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={src}>
            <button type="button" className="product-container" onClick={() => lightbox.open(i)}>
              <div className="left-block">
                <img className="img-responsive" alt="Rohini Chess Academy gallery" src={src} />
              </div>
              <div className="right-block">
                <span className="btn-shop">View large</span>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox images={images} index={lightbox.index} onClose={lightbox.close} onPrev={lightbox.prev} onNext={lightbox.next} />
    </>
  )
}
