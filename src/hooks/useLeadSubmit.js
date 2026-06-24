import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const GSCRIPT_URL = import.meta.env.VITE_GSCRIPT_URL

export default function useLeadSubmit(formName, sourceSection) {
  const location = useLocation()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const submit = async (fields) => {
    if (!GSCRIPT_URL) {
      console.error('VITE_GSCRIPT_URL is not set — see .env.example')
      setStatus('error')
      return false
    }

    setStatus('sending')

    const data = new FormData()
    data.append('name', fields.name || '')
    data.append('email', fields.email || '')
    data.append('phone', fields.phone || '')
    data.append('location', fields.location || '')
    data.append('message', fields.message || '')
    data.append('Form Name', formName)
    data.append('type', formName)
    data.append('source_page', location.pathname)
    data.append('source_section', sourceSection)
    data.append('sheet', 'Sheet2')

    try {
      await fetch(GSCRIPT_URL, { method: 'POST', mode: 'no-cors', body: data })
      setStatus('success')
      return true
    } catch (err) {
      console.error(err)
      setStatus('error')
      return false
    }
  }

  return { status, submit }
}
