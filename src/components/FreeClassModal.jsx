import { useEffect, useState } from 'react'

export default function FreeClassModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  if (!open) return null

  return (
    <div className="free-class-overlay" onClick={() => setOpen(false)}>
      <div className="free-class-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="free-class-close" aria-label="Close" onClick={() => setOpen(false)}>
          &times;
        </button>
        <img src="/finalpopup.jpeg" alt="Rohini Chess Academy - Book a Free Demo Class" />
      </div>
    </div>
  )
}
