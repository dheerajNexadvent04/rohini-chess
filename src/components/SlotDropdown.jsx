import { useEffect, useRef, useState } from 'react'

export default function SlotDropdown({ icon, placeholder, options, value, isCustom, customValue, onSelect, onCustomChange, onUseCustom }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div className="slot-dropdown" ref={ref}>
      <button type="button" className="slot-dropdown-trigger" onClick={() => setOpen((o) => !o)}>
        <span className="slot-dropdown-icon" aria-hidden="true">{icon}</span>
        <span className="slot-dropdown-value">{value || placeholder}</span>
        <span className="slot-dropdown-caret" aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {isCustom && (
        <input
          type="text"
          className="form-control full-width slot-custom-input"
          placeholder="Type your preferred option"
          value={customValue}
          onChange={(e) => onCustomChange(e.target.value)}
          required
        />
      )}

      {open && (
        <div className="slot-dropdown-menu">
          <button
            type="button"
            className="slot-dropdown-item slot-dropdown-custom"
            onClick={() => {
              onUseCustom()
              setOpen(false)
            }}
          >
            Custom (Write your own)
          </button>
          {options.map((opt) => (
            <button
              type="button"
              key={opt}
              className="slot-dropdown-item"
              onClick={() => {
                onSelect(opt)
                setOpen(false)
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
