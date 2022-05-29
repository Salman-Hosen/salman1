import React, { useEffect, useState } from "react";

import '../Testimonials/Testimoinal.css'
import '../Testimonials/Testimonial1.css'

import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";

export default function Testimonial1() {
    const [par1,setPar1] = useState(2)
    const [par2,setPar2] = useState(2)
    const [par3,setPar3] = useState(4)
    var i=1;
    const salman = ()=>{
        
        setInterval(() => {
            if(i===1){
                setPar1(2)
                setPar2(3)
                setPar3(4)
            }else if(i===2){
                setPar1(3)
                setPar2(4)
                setPar3(1)
            }else if(i===3){
                setPar1(1)
                setPar2(2)
                setPar3(3)
            }
            if(i>4){
                i=0
            }else{
                i = i+1;
            }
           
           }, 4000);
            
    }
    const function1 =()=>{
        if(par1===1){
            return <Card1/>
        }else if(par1 === 2){
            return <Card2/>
        }else if(par1 === 3){
            return <Card3/>
        }else return <Card4/>
    }
    const function3 =()=>{
        if(par3===1){
            return <Card1/>
        }else if(par3 === 2){
            return <Card2/>
        }else if(par3 === 3){
            return <Card3/>
        }else return <Card4/>
    }
    const function2 =()=>{
        if(par2===1){
            return <Card1/>
        }else if(par2 === 2){
            return <Card2/>
        }else if(par2 === 3){
            return <Card3/>
        }else return <Card4/>
    }
    
   useEffect(()=>{
    salman();
        
   },[])

    
 
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
                   <div className="row">
                       <div className="col-lg-4 side">
                       {function1()}
                       </div>
                       <div className="col-lg-4 center">
                       {function2()}
                       </div>
                       <div className="col-lg-4 side">
                       {function3()}
                       </div>
                   </div>
              </div>
          </div>
      </div>
    
    </>
  );
}