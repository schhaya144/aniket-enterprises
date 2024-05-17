import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation if you are using react-router

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top bg-primary">
        <div className="container">
          <a className="navbar-brand text-white fs-4 fw-bold" href="#">
            Aniket Enterprises
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
            onClick={handleToggleNav}
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className={`offcanvas offcanvas-end text-bg-primary ${isNavOpen ? "show" : ""}`}
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">
                Aniket Enterprises
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav offnav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    href="#about"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      location.pathname === "/services" ? "active" : ""
                    }`}
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      location.pathname === "/projects" ? "active" : ""
                    }`}
                    href="/projects"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      location.pathname === "/team" ? "active" : ""
                    }`}
                    href="#team"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
