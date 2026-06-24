import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import FreePuzzle from './FreePuzzle'
import WhatsAppWidget from './WhatsAppWidget'

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
      <FreePuzzle />
    </div>
  )
}
