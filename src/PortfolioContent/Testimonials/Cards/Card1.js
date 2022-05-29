import React from 'react'
import cimg from '../Cimg/s3.jpg'
import cimg1 from '../Cimg/p2.jpg'
import '../Card.css'

const Card1 = () => {
    
  return (
    <>
     <div className='cad1'>
         <div className='img1'><img src={cimg1} alt={"No Internet"}/></div>
         <div className='img2'><img src={cimg} alt={"No Internet"}/></div>
         <div className='main-text'>
             <h2>Salman Farshi1</h2>
             <p>Hello This is Salman Farshi. I am a student of Electrical and Electronic Engineer. Your work is very good. It really help me a lo</p>
         </div>
         <div className='social'>
         <i class="fa-brands fa-facebook-square"></i>
         <i class="fa-brands fa-facebook-square"></i>
         <i class="fa-brands fa-facebook-square"></i>
         <i class="fa-brands fa-facebook-square"></i>
         </div>
     </div>
    
    </>
  )
}

export default Card1