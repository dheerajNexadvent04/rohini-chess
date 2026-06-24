import { useState } from 'react'

export default function Faq({ items, title }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-section">
      {title && <h2 className="group-title faq-title"><span>{title}</span></h2>}
      <div className="faq-list">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.question}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-answer-wrap">
                <div className="faq-answer-inner">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
