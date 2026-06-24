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
        spaceBetween={10}
        autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 3 },
          1000: { slidesPerView: 5 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={src}>
            <div className="product-container">
              <div className="left-block">
                <img className="img-responsive" alt="Rohini Chess Academy gallery" src={src} />
              </div>
              <div className="right-block hidden-xs">
                <div className="right-block-1">
                  <div className="button-group">
                    <button type="button" className="btn-shop" onClick={() => lightbox.open(i)}>
                      View large
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox images={images} index={lightbox.index} onClose={lightbox.close} onPrev={lightbox.prev} onNext={lightbox.next} />
    </>
  )
}
