import React from 'react'

import '../Testimonials/Card.css'

const Card = (props) => {
    const name = props.name
    const desc = props.desc
    const cimg = props.cimg
    const cimg1 = props.cimg1
  return (
    <>
     <div className='cad1'>
         <div className='img1'><img src={cimg} alt={"No Internet"}/></div>
         <div className='img2'><img src={cimg1} alt={"No Internet"}/></div>
         <div className='main-text'>
             <h2>{name}</h2>
             <p>{desc}</p>
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

export default Card