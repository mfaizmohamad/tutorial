import React from 'react'
import Header from './component/header/header.jsx'
import Nav from './component/nav/nav.jsx'
import About from './component/about/about.jsx'
import Experience from './component/experience/experience.jsx'
import Services from './component/services/services.jsx'
import Portfolio from './component/portfolio/portfolio.jsx'
import Testimonial from './component/testimonial/testimonial.jsx'
import Contact from './component/contact/contact.jsx'
import Footer from './component/footer/footer.jsx'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )  
}

export default App