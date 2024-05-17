import React from 'react'
import "../../../src/Contact.css";

function Contact() {
  return (

    <div className="container-fluid"> 
    {/* form container start*/}
      <div className="row contect-box">
      
      {/* form-senction-start */}
      <div className='col-md-6 form-section border text-center' >
         <div>
         <input type="email" name="" id="" />
         </div>
         <div>
         <input type="email" name="" id="" />
         </div>
         <div>
         <input type="textarea" name="" id="" />
         </div>
         <div>
          <input type="button" value="" />
         </div>
      </div>
      {/* form-senction-end */}
       
       {/* image-senction-start */}
      <div className='col-md-6 image-section' >

      </div>
       {/* image-senction-end */}
     </div>
{/* form container end */}
    </div>
  )
}

export default Contact;
