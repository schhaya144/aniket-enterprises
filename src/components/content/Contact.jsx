import React from 'react'
import "../../contact.css";
import ContactImg from "../assets/what-we-do.png";

function Contact() {
  return (

    <div className="container-fluid"> 
    {/* form container start*/}
      <div className="row contect-box">
      
      {/* form-senction-start */}
      <div className='col-md-6 form-section border text-center' >
      <div class="container">
    <div class="form-container">
        <h2 class="form-title text-center">Contact Us</h2>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div class="mb-3">
                <label for="mobile" class="form-label">Mobile Number</label>
                <input type="tel" class="form-control" id="mobile" placeholder="Enter your mobile number" />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div class="mb-3">
                <label for="dropdown" class="form-label">Select an Option</label>
                <select class="form-select" id="dropdown">
                    <option selected>Select an option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" class="btn btn-custom w-100">Submit</button>
        </form>
    </div>
</div>
      </div>
      {/* form-senction-end */}
       
       {/* image-senction-start */}
      <div className='col66-md-6 image-section' >

      </div>
       {/* image-senction-end */}
     </div>
{/* form container end */}
    </div>
  )
}

export default Contact;
