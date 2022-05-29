import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">AboutMe</a>
                    <a className="nav-link" href="#">Testimonials</a>
                    <a className="nav-link" href="#">ContactMe</a>
                    
                    
                </div>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar