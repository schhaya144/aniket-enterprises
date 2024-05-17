import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className="footer-basic bg-primary">
        <footer>
            <div className="social"><Link to="#"><i className="fa-brands fa-instagram"></i></Link><Link to="#"><i className="fa-brands fa-twitter"></i></Link><Link to="/"><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></div>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                <li className="list-inline-item"><Link to="/about">About</Link></li>
                <li className="list-inline-item"><Link to="services">Services</Link></li>
                <li className="list-inline-item"><Link to="/projects">Projects</Link></li>
                <li className="list-inline-item"><Link to="/policy">Privacy Policy</Link></li>
            </ul>
            <p className="copyright">SSS Technologies © 2024</p>
        </footer>
    </div>
    </>
  )
}

export default Footer
