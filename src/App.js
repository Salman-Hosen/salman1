import React from 'react'
import About from './PortfolioContent/AboutMe/About'
import Contact from './PortfolioContent/ContuctMe/Contact'
import Experience from './PortfolioContent/Experience/Experience'
import Footer from './PortfolioContent/Footer/Footer'
import Home from './PortfolioContent/Home/Home'
import Navbar from './PortfolioContent/Navbar/Navbar'
import Testimoiner from './PortfolioContent/Testimonials/Testimoiner'
// import Testimonial1 from './PortfolioContent/Testimonials/Testimonial1'
// import Testimonial2 from './PortfolioContent/Testimonials/Testimonial2'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Experience/>
      <Testimoiner/>
      <About/>
      <Contact/>
      <Footer/>
      
      {/* <Testimonial1/>
      <Testimonial2/> */}
      
    </div>
  )
}

export default App