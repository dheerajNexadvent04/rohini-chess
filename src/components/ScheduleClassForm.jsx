import { useState } from 'react'
import useLeadSubmit from '../hooks/useLeadSubmit'
import SlotDropdown from './SlotDropdown'
import { getNextDateOptions, TIME_SLOT_OPTIONS } from '../data/scheduleOptions'

const DATE_OPTIONS = getNextDateOptions(10)

export default function ScheduleClassForm() {
  const { status, submit } = useLeadSubmit('Schedule Online Class', 'Schedule Online Class Form')

  const [date, setDate] = useState('')
  const [dateIsCustom, setDateIsCustom] = useState(false)
  const [customDate, setCustomDate] = useState('')

  const [time, setTime] = useState('')
  const [timeIsCustom, setTimeIsCustom] = useState(false)
  const [customTime, setCustomTime] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    // Honeypot: bots tend to fill every field, real users never see/fill this one.
    if (form.hp_field.value) return

    const finalDate = dateIsCustom ? customDate : date
    const finalTime = timeIsCustom ? customTime : time

    const ok = await submit({
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      location: form.location.value,
      date: finalDate,
      time: finalTime,
    })

    if (ok) {
      form.reset()
      setDate('')
      setDateIsCustom(false)
      setCustomDate('')
      setTime('')
      setTimeIsCustom(false)
      setCustomTime('')
    }
  }

  return (
    <form className="contact-form schedule-class-form" onSubmit={handleSubmit}>
      <h2>Book an Online Class</h2>

      <div className="row">
        <input type="text" name="hp_field" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />

        <div className="col-lg-6">
          <label className="lead-form-label" htmlFor="schedule-name">Your Name</label>
          <input id="schedule-name" className="form-control full-width" name="name" pattern="[a-zA-Z ]+" placeholder="Enter your full name" required type="text" />
        </div>

        <div className="col-lg-6">
          <label className="lead-form-label" htmlFor="schedule-email">Your Email ID</label>
          <input id="schedule-email" className="form-control full-width" name="email" placeholder="Enter your email" required type="email" />
        </div>

        <div className="col-lg-6">
          <label className="lead-form-label" htmlFor="schedule-phone">Your Phone Number</label>
          <input id="schedule-phone" className="form-control full-width" maxLength="10" name="phone" placeholder="Enter your phone number" required type="tel" />
        </div>

        <div className="col-lg-6">
          <label className="lead-form-label" htmlFor="schedule-location">Your Location</label>
          <input id="schedule-location" className="form-control full-width" name="location" placeholder="City, Country" required type="text" />
        </div>

        <div className="col-lg-6">
          <label className="lead-form-label">Preferred Date</label>
          <SlotDropdown
            icon="📅"
            placeholder="Select preferred date"
            options={DATE_OPTIONS}
            value={date}
            isCustom={dateIsCustom}
            customValue={customDate}
            onSelect={(opt) => {
              setDate(opt)
              setDateIsCustom(false)
            }}
            onCustomChange={setCustomDate}
            onUseCustom={() => {
              setDateIsCustom(true)
              setDate('')
            }}
          />
        </div>

        <div className="col-lg-6">
          <label className="lead-form-label">Preferred Time Slot</label>
          <SlotDropdown
            icon="🕐"
            placeholder="Select preferred time"
            options={TIME_SLOT_OPTIONS}
            value={time}
            isCustom={timeIsCustom}
            customValue={customTime}
            onSelect={(opt) => {
              setTime(opt)
              setTimeIsCustom(false)
            }}
            onCustomChange={setCustomTime}
            onUseCustom={() => {
              setTimeIsCustom(true)
              setTime('')
            }}
          />
        </div>

        <div className="col-lg-12">
          <input
            className="custom_btn schedule-class-submit"
            type="submit"
            value={status === 'sending' ? '...Sending' : 'Schedule Class Now'}
            disabled={status === 'sending'}
          />
        </div>

        {status === 'success' && (
          <div className="col-lg-12">
            <p className="lead-form-note success">Thanks! We've received your scheduling request and will confirm shortly.</p>
          </div>
        )}
        {status === 'error' && (
          <div className="col-lg-12">
            <p className="lead-form-note error">Something went wrong. Please call us instead at +91-8447992702.</p>
          </div>
        )}
      </div>
    </form>
  )
}
