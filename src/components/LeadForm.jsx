import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const GSCRIPT_URL = import.meta.env.VITE_GSCRIPT_URL

export default function LeadForm({ formName, sourceSection = 'Main Form' }) {
  const location = useLocation()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    // Honeypot: bots tend to fill every field, real users never see/fill this one.
    if (form.company.value) return

    if (!GSCRIPT_URL) {
      console.error('VITE_GSCRIPT_URL is not set — see .env.example')
      setStatus('error')
      return
    }

    setStatus('sending')

    const data = new FormData()
    data.append('name', form.name.value)
    data.append('email', form.email.value)
    data.append('phone', form.phone.value)
    data.append('location', form.location.value)
    data.append('message', form.message.value)
    data.append('Form Name', formName)
    data.append('type', formName)
    data.append('source_page', location.pathname)
    data.append('source_section', sourceSection)
    data.append('sheet', 'Sheet2')

    try {
      await fetch(GSCRIPT_URL, { method: 'POST', mode: 'no-cors', body: data })
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <div className="row">
        <input type="text" name="company" className="hp-field" tabIndex="-1" autoComplete="off" />

        <div className="col-lg-6">
          <input className="form-control full-width" name="name" pattern="[a-zA-Z ]+" placeholder="Your Name*" required type="text" />
        </div>

        <div className="col-lg-6">
          <input className="form-control full-width" name="email" placeholder="Your Email ID*" required type="email" />
        </div>

        <div className="col-lg-6">
          <input className="form-control full-width" maxLength="10" name="phone" placeholder="Your Phone Number*" required type="tel" />
        </div>

        <div className="col-lg-6">
          <input className="form-control full-width" name="location" placeholder="Your Location*" required type="text" />
        </div>

        <div className="col-lg-12">
          <textarea className="form-control full-width-m" name="message" placeholder="Your Message*" required></textarea>
        </div>

        <div className="col-lg-12">
          <input
            className="custom_btn"
            type="submit"
            value={status === 'sending' ? '...Sending' : 'Submit'}
            disabled={status === 'sending'}
          />
        </div>

        {status === 'success' && (
          <div className="col-lg-12">
            <p className="lead-form-note success">Thanks! We've received your message and will get back to you shortly.</p>
          </div>
        )}
        {status === 'error' && (
          <div className="col-lg-12">
            <p className="lead-form-note error">Something went wrong sending your message. Please call us instead at +91-8447992702.</p>
          </div>
        )}
      </div>
    </form>
  )
}
