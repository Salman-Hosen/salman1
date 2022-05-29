import React from 'react'
import salman from '../Photos/salman.jpg'
import '../AboutMe/About.css'

const About = () => {
  return (
    <>
        <div className='container'>
            <div className='a0'>
            <div className='a1'>
                <h3>About Me</h3>
                <p>Why choose me?</p>
                <h1></h1>
            </div>
            <div className='a2'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={salman} alt={"No internet"}/>

                    </div>
                    <div className='col-lg-6 about2'>
                        <p>Hello, I am salman.Basically I am an Electrical and Electronic Engineer.But I have a lot of interest of web desinging and developing.Now I am become a proffessional web developar and feel safe to hire me.
                        </p>
                        
                        <div className='a2b1'>
                        <p>Here are few highlight-</p>
                        <i class="fa-solid fa-circle"></i>
                        <span>Full stack web development</span>
                        </div>
                        <div>
                        <i class="fa-solid fa-circle"></i>
                        <span>Project helping</span>
                        </div>
                        <div>
                        <i class="fa-solid fa-circle"></i>
                        <span>Building rest api</span>
                        </div>
                        <div>
                        <i class="fa-solid fa-circle"></i>
                        <span>Interactive frontend as per design</span>
                        </div>
                        <div>
                        <i class="fa-solid fa-circle"></i>
                        <span>Managing Detabase </span>
                        </div>
                        <div className='row buttins'>
                            <div className='col-lg-6 buttins1'>
                            <button className='buttin1'>Hire Me</button>
                            </div>
                            
                            <div className='col-lg-6 buttins1'>
                            <button className='buttin2'>Hire Me</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About