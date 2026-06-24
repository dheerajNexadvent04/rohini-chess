import { useState } from 'react'

export default function useLightbox(images) {
  const [index, setIndex] = useState(null)

  return {
    index,
    open: (i) => setIndex(i),
    close: () => setIndex(null),
    prev: () => setIndex((i) => (i - 1 + images.length) % images.length),
    next: () => setIndex((i) => (i + 1) % images.length),
  }
}
