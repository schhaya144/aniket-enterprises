import React from 'react'
import whatDo from '../assets/what-we-do.png'
import '../../../src/About.css'




function About() {
  return (
  <div className="container about-container">

<div className='row'>
  
<div className='col-md-6'>
<img className='about-img img-fluid' src={whatDo} alt="" />
</div>
<div className='col-md-6'>


<p className='about-para text-center'>
  <h3 className='card-heading' >About <span className='about-text'>Aniket Enterprises</span></h3>
Our Organization i.e. Aniket Enterprises was set up in the year 2007as a 
proprietorship concern. It was approved by the state government of 
Madhya Pradesh for industrial consultancy during 2010.
We offer multiple industrial consultancy services to our clients from 
Investment Profile, Detailed Project Report and Techno Economic viability 
reports etc


Our wide gamut of consultancy services include preparation of industrial 
feasibility reports for banks below 1 Crore and a few above 1.00 Cr
On an average we prepare detailed project reports for more than 1000 
clients every year
We also provide property valuation services to various banks.
We are known for our quality work, integrity and time effectiveness.
</p>
</div>
</div>

<div>
  <div className="row">
    <h3 className='card-heading text-center'>We offer consultancy services in different sectors like</h3>
  </div>
  <div className='d-flex justify-content-evenly'>
    <div> food processing, </div>
    <div>Engineering</div>
    <div>Plastic</div>
    <div>Manufacturing</div>
    <div>Construction</div>
    <div>Dairy etc.</div>
  </div>
</div>

  </div>
  )
}

export default About
