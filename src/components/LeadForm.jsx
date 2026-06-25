import useLeadSubmit from '../hooks/useLeadSubmit'

export default function LeadForm({ formName, sourceSection = 'Main Form' }) {
  const { status, submit } = useLeadSubmit(formName, sourceSection)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    // Honeypot: bots tend to fill every field, real users never see/fill this one.
    if (form.hp_field.value) return

    const ok = await submit({
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      location: form.location.value,
      message: form.message.value,
    })
    if (ok) form.reset()
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <div className="row">
        <input type="text" name="hp_field" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />

        <div className="col-lg-6">
          <label className="lead-form-label" htmlFor="lead-name">Your Name</label>
          <input id="lead-name" className="form-control full-width" name="name" pattern="[a-zA-Z ]+" placeholder="Enter your name" required type="text" />
        </div>

        <div className="col-lg-6">
          <label className="lead-form-label" htmlFor="lead-email">Email Address</label>
          <input id="lead-email" className="form-control full-width" name="email" placeholder="alex@example.com" required type="email" />
        </div>

        <div className="col-lg-6">
          <label className="lead-form-label" htmlFor="lead-phone">Phone Number</label>
          <input id="lead-phone" className="form-control full-width" maxLength="10" name="phone" placeholder="+91 00000 00000" required type="tel" />
        </div>

        <div className="col-lg-6">
          <label className="lead-form-label" htmlFor="lead-location">Location</label>
          <input id="lead-location" className="form-control full-width" name="location" placeholder="Your area / city" required type="text" />
        </div>

        <div className="col-lg-12">
          <label className="lead-form-label" htmlFor="lead-message">Your Message</label>
          <textarea id="lead-message" className="form-control full-width-m" name="message" placeholder="Tell us how we can help..." required></textarea>
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
