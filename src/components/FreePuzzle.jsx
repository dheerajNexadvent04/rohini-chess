import { useState } from 'react'
import useLeadSubmit from '../hooks/useLeadSubmit'

const PUZZLE_PDF_URL = '/chess-puzzles.pdf'

function downloadPuzzle() {
  const link = document.createElement('a')
  link.href = PUZZLE_PDF_URL
  link.download = 'Rohini-Chess-Academy-Free-Puzzle.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export default function FreePuzzle() {
  const [open, setOpen] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const { submit } = useLeadSubmit('Free Puzzle Download', 'Free Puzzle Popup')

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    // Honeypot: bots tend to fill every field, real users never see/fill this one.
    if (form.hp_field.value) return

    // The PDF is a static file - hand it over immediately rather than making
    // the actual deliverable depend on the Google Sheet round-trip succeeding.
    downloadPuzzle()
    setDownloaded(true)

    submit({ email: form.email.value, phone: form.phone.value, message: 'Free Puzzle PDF request' })
    form.reset()
  }

  return (
    <>
      <button type="button" className="puzzle-cta-btn" onClick={() => setOpen(true)}>
        <span className="puzzle-cta-icon" aria-hidden="true">🎁</span>
        Free Puzzle
      </button>

      {open && (
        <div className="puzzle-modal-overlay" onClick={() => setOpen(false)}>
          <div className="puzzle-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="puzzle-modal-close" aria-label="Close" onClick={() => setOpen(false)}>
              &times;
            </button>

            <div className="puzzle-modal-icon" aria-hidden="true">♟️</div>
            <h2 className="puzzle-modal-title">Get Your Free Chess Puzzle!</h2>
            <p className="puzzle-modal-subtitle">
              Master the board with our hand-picked collection of championship-level puzzles. Enter your details to download the PDF instantly.
            </p>

            <form onSubmit={handleSubmit}>
              <input type="text" name="hp_field" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />

              <label className="puzzle-modal-label" htmlFor="puzzle-email">Email Address</label>
              <input
                id="puzzle-email"
                className="form-control full-width"
                name="email"
                type="email"
                placeholder="alex@example.com"
                required
              />

              <label className="puzzle-modal-label" htmlFor="puzzle-phone">Phone Number</label>
              <input
                id="puzzle-phone"
                className="form-control full-width"
                name="phone"
                type="tel"
                maxLength="10"
                placeholder="+91 00000 00000"
                required
              />

              <button type="submit" className="puzzle-modal-submit">
                Download Puzzle
              </button>

              {downloaded && <p className="lead-form-note success">Your puzzle download has started!</p>}
            </form>
          </div>
        </div>
      )}
    </>
  )
}
