const WHATSAPP_NUMBER = '918447992702'

export default function WhatsAppWidget() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-widget"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <img src="/WhatsApp-icon.svg" alt="WhatsApp" />
    </a>
  )
}
