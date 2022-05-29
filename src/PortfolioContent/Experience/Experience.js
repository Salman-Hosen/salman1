import React, { useState } from 'react'
import '../Experience/Experience.css'


const Experience = () => {
    const [bno,setBno] = useState(1)
    const clicked = (index)=>{
        setBno(index)

    }
  return (
    <>
<div className='container e0'>
    <div className='e1'>
        <h1>Resume</h1>
        <p>My formal Bio Deatails</p>
    </div>
    <div className='row e2'>
        <div className='col-lg-3 e2f1'>
            <div className='e2f2o'>
                <div className='e2f2o1'><i class="fa-solid fa-building-columns">
                </i></div>
                <div className='e2f2'><p onClick={()=> clicked(1)} 
                className={bno === 1? "botn-active":"botn"}>Education</p></div>
            </div>
            <div className='e2f2o'>
                <div className='e2f2o1'><i class="fa-solid fa-briefcase"></i></div>
                <div className='e2f2'><p onClick={()=> clicked(2)}
            className={bno === 2? "botn-active":"botn"}>Work History</p></div>
            </div>
            <div className='e2f2o'>
            <div className='e2f2o1'><i class="fa-brands fa-node-js"></i></div>
                <div className='e2f2'><p onClick={()=> clicked(3)}
            className={bno === 3? "botn-active":"botn"}>Programing Skill</p></div>
            </div>
            <div className='e2f2o'>
                <div className='e2f2o1'><i class="fa-brands fa-css3-alt"></i></div>
                <div className='e2f2'><p onClick={()=> clicked(4)}
            className={bno === 4? "botn-active":"botn"}>Projects</p></div>
            </div>
            <div className='e2f2o'>
            <div className='e2f2o1'><i class="fa-brands fa-react"></i></div>
                <div className='e2f2'><p onClick={()=> clicked(5)}
            className={bno === 5? "botn-active":"botn"}>Interest</p></div>
            </div>
            
 
        </div>
        <div className='col-lg-9'>
            
            <div className={bno === 1? "contont-active":"contont"}>
                <div className='education'>
                    <div>
                    <i class="fa-solid fa-circle"></i>
                    <span className='edu1'>Rajshahi University of Engineering Technology</span>
                    <span className='edu2'>2020-Cont.</span>
                    <p>Here I am now studying in department of Electrical and Electronic Engineerng</p>
                    </div>

                    <div>
                    <i class="fa-solid fa-circle"></i>
                    <span className='edu1'>Higher Secondery Study</span>
                    <span className='edu2'> 2017-2019</span>
                    <p>I complete my Higher secondery education from New Govt Degree College, Rajshahi with a brilliant result G.P.A-5.00</p>
                    </div>

                    <div>
                    <i class="fa-solid fa-circle"></i>
                    <span className='edu1'>Secondery Education</span>
                    <span className='edu2'>2014-2017</span>
                    <p>I completed my seconder education from our local high school called Sonamukhi Hign School located in Akkelpur, Joypurhat with a brilliant result.</p>
                    </div>
                </div>
            </div>
            <div className={bno === 2? "contont-active":"contont"}>
                <h1>Hello THis si farshi</h1>
                <p>Happ to see you</p>
            </div>
            <div className={bno === 3? "contont-active":"contont"}>
                <div className='row pskill'>
                    <div className='col-lg-6 grid-container'>
                        <div className='grid-item'>
                            <i class="fa-solid fa-circle"></i>
                            <span className='edu1'>Javascript</span>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{"width": "70%"} }aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>70%
                            </div>
                        </div>
                        <div className='grid-item'>
                            <i class="fa-solid fa-circle"></i>
                            <span className='edu1'>MERN</span>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{"width": "55%"} }aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">55%</div>
                            </div>
                        </div>
                        <div className='grid-item'>
                            <i class="fa-solid fa-circle"></i>
                            <span className='edu1'>HTML</span>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{"width": "85%"} }aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                            </div>
                        </div>
                        <div >
                            <i class="fa-solid fa-circle"></i>
                            <span className='edu1'>CSS</span>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{"width": "75%"} }aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 grid-container grid-container2'>
                        <div className='grid-item'>
                            <i class="fa-solid fa-circle"></i>
                            <span className='edu1'>Bootstrap</span>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{"width": "80%"} }aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                        </div>
                        <div className='grid-item'>
                            <i class="fa-solid fa-circle"></i>
                            <span className='edu1'>ReactJs</span>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{"width": "65%"} }aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">65%</div>
                            </div>
                        </div>
                        <div className='grid-item'>
                            <i class="fa-solid fa-circle"></i>
                            <span className='edu1'>MongoDB</span>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{"width": "71%"} }aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">71%</div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className={bno === 4? "contont-active":"contont"}>
                <h1>Hello THis si farshi</h1>
                <p>Happ to see you</p>
            </div>
            <div className={bno === 5? "contont-active":"contont"}>
                <h1>Hello THis si farshi</h1>
                <p>Happ to see you</p>
            </div>
            

        </div>
    </div>
</div>    
    </>
  )
}

export default Experience