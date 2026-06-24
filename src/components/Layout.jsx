import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </div>
  )
}
