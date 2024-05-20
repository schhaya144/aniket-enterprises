import React from 'react'
import "../../contact.css";
// import ContactImg from "../assets/what-we-do.png";
import ContactBg from "../assets/ContactBg.jpg";
import {
     SparklesIcon,
  } from "@heroicons/react/24/outline";


function Contact() {
  return (

 <div className="container-fluid bg">
    {/* form container start*/}
     
 <div className="container">
    <div className="form-container">
        <h2 className="form-title text-center card-heading">
            <span className="about-text text-primary">Contact Us <SparklesIcon className="icon02" /></span>
        </h2>
        <form>
            <div className="mb-3">
                <label for="name" className="form-label input-headings">Name</label>
                <input type="text" className="form-control input-custom" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
                <label for="mobile" className="form-label input-headings">Mobile Number</label>
                <input type="tel" className="form-control input-custom" id="mobile" placeholder="Enter your mobile number" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label input-headings">Email address</label>
                <input type="email" className="form-control " id="email input-custom" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
                <label for="dropdown" className="form-label input-headings">Service interested in</label>
                <select className="form-select" id="dropdown">
                    <option selected>Project Identification</option>
                    <option value="1">Pre Investment Feasibility Studies</option>
                    <option value="2">Detailed Project Report</option>
                    <option value="3">Technical & Financial Appraisal</option>
                    <option value="3">Valuation Studies for Real Estate</option>
                    <option value="3">Techno Economic Viability Reports</option>
                    <option value="3">Land Allotment Documentation</option>
                    <option value="3">Chartered Engineering Certificates</option>
                    <option value="3">Chartered Accountant Certificates</option>
                    <option value="3">Others</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="message" className="form-label input-headings">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-custom btn-primary w-100">Submit</button>
        </form>
    </div>
</div>

    {/* form container end */}
    </div>
  )
}

export default Contact;
