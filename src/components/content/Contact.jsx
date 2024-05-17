import React from 'react'
import "../../contact.css";
import ContactImg from "../assets/what-we-do.png";

function Contact() {
  return (

    <div classNameName="container-fluid"> 
    {/* form container start*/}
      <div classNameName="contect-box">
 <div className="container">
    <div className="form-container">
        <h2 className="form-title text-center">Contact Us</h2>
        <form>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control input-custom" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
                <label for="mobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control input-custom" id="mobile" placeholder="Enter your mobile number" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control input-custom" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
                <label for="dropdown" className="form-label">Select an Option</label>
                <select className="form-select" id="dropdown">
                    <option selected>Select an option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-custom w-100">Submit</button>
        </form>
    </div>
</div>
     </div>
    {/* form container end */}
    </div>
  )
}

export default Contact;
