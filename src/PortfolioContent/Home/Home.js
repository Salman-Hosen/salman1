import React from 'react'
import '../Home/Home.css'
import pimg from './salman.jpg'
import Typical from 'react-typical'

const Home = () => {
  return (
    <div>
        <div className='Home'>
            <div className='container Homes'>
                <div className='row Homeses'>
                    <div className='col-lg-7  '>
                        <div className='home-icons'>
                            <a className='home-icon' href='https://www.facebook.com/salman.farshi.18294053' target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-square"></i></a>
                            <a className='home-icon' href='https://www.facebook.com/salman.farshi.18294053' target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp-square"></i></a>
                            <a className='home-icon' href='https://www.facebook.com/salman.farshi.18294053' target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                            <a className='home-icon' href='https://www.facebook.com/salman.farshi.18294053' target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
                            <a className='home-icon' href='https://www.facebook.com/salman.farshi.18294053' target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className='Home-name'>
                            <h4>Hello, I'm <span className='Home-name-style'>Salman Farshi</span></h4>
                        </div>
                        <div className='Home-type'>
                            <span>
                            <h1>
                               <Typical
                               
                               steps={[
                                   "Javascript Developer ♥",
                                   2000,
                                   "React Js Developer 📱",
                                   2000,
                                   "MERN/Basic Developer 😊",
                                   2000,
                                   "An exelent worker forever 🕘",
                                   2000
                               ]}
                               loop={Infinity}
                               /> 
                            </h1>
                            </span>
                        </div>
                        <div className='Home-para'>
                            <p>Welcome to my website. Have a nice day and happy coding. Thank you
                            </p>
                        </div>
                        <div className='row buttons1'>
                            <div className='col-lg-6 button11'>
                            <button type="button" class="btn btn-outline-warning button1">ContactMe</button>
                            </div>
                            <div className='col-lg-6 button22'>
                            <button type="button" class="btn btn-outline-success button2">Get Demo</button>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-5 sm-order-first'>
                        <div className='Home-image'>
                            <div className='Home-imge'>
                             <img className='Home-img' src={pimg} alt=""/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home