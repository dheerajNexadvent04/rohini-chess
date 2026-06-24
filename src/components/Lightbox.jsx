import { useEffect } from 'react'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, onPrev, onNext])

  if (index === null || index === undefined) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        {images.length > 1 && (
          <button type="button" className="lightbox-prev" onClick={onPrev} aria-label="Previous">
            &#8249;
          </button>
        )}
        <img src={images[index]} alt="" />
        {images.length > 1 && (
          <button type="button" className="lightbox-next" onClick={onNext} aria-label="Next">
            &#8250;
          </button>
        )}
      </div>
    </div>
  )
}
