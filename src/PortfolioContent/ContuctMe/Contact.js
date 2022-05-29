import React from 'react'
import '../ContuctMe/Contact.css'
import Typical from 'react-typical'
import emailjs from 'emailjs-com'

const Contact = () => {
  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_c7dig7r','template_ruj3ven',e.target,"aWAjCb9kHf3HZB4Nc")
    .then((res)=> {
      alert("Your email successfully send❤")
    })
    .catch(()=>{
      alert("Error Happened! Please try again")
    })
  }
  return (
    <>
    <div className='contact'>
      <div className='con0'>
        <h2>Contact With Me</h2>
      </div>
      <div className='con11'>
      <div className='con1'>
        <div className='row '>
          <div className='col-lg-6 con2'>
            
            <h3>
                  <Typical
                                
                    steps={[
                              "⭕Hello, How are u ???⭕",
                              2000,
                              "💞Get in touch with me💞",
                              2000
                            ]}
                              loop={Infinity}
                     /> 
            </h3>
            

          </div>
          <div className='col-lg-6 con3'>
            <h4>Contact Form</h4>
            <div className='con4'>
              <form onSubmit={sendEmail} >
                <label className='flabel'>Name</label>
                <input type='text' name="name" className='form-control'/>
                <label className='flabel'>Email</label>
                <input type='email' name="email"className='form-control'/>
                <label className='flabel'>Message</label>
                <textarea type="text" name="message" rows={4}className='form-control'/>
                <button className='form-control btn btn-success' type='submit' value="send">Send Email</button>
              </form>
            </div>
            
          </div>
        </div>

      </div>
      </div>
    </div>


    </>
  )
}

export default Contact

