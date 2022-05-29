import React, { useState } from "react";
import data from '../Testimonials/Testimonial.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../Testimonials/Testimoinal.css'
import Card from "./Card";

export default   function Testimoiner () {
  const [idea,setIdea] = useState(0)
    var setting =({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        infinite:true, 
        autoplay: true,
        autoplaySpeed: 2000,
        // rtl:true,
        lazyload:true,
        beforeChange:(current,next)=>setIdea(next),
        speed:300,responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,infinite: true,
                dots: true
              }
            }
            
          ]
        });
    
    
 
  return (
      <>
      <div className="t0">
          <div className=" t01 container">
              <div className="th1">
                  <h3>Clients Review</h3>
                  <p>Thanks for giving valuable revies <small
                  style={{"color":"red"}}>♥</small></p>
                  <h4></h4>
              </div>
              <div className="th2">
                    <div className="row th3">
                        <Slider {...setting}>
                        {data.map((info)=>{
                          return  <div className={
                           (info.id === idea)? "active-slide":"slide"} key={info.id}><Card name={info.name} desc={info.desc} cimg={info.cimg} cimg1={info.cimg1} /></div>
                           
                        })}
                        </Slider>
                        
                        
                    </div>
              </div>
          </div>
      </div>
    
    </>
  );
}