import React from "react";
import '../Testimonials/Testimoinal.css'
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";

export default function Testimonial2() {
    const setting =({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
      
        
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
                 <div data-slick={{"slidesToShow": 4, "slidesToScroll": 4}}>
                    <div><Card1/></div>
                    <div><Card2/></div>
                    <div><Card3/></div>
                    <div><Card4/></div>
                    
                    </div>
              </div>
          </div>
      </div>
    
    </>
  );
}