import React from "react";
import style from "./Home.module.css";
// import heroImg from "../assets/hero.png";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
import Services from "./Services";
function Home() {
  return (
    <>
      <section>
        <div className={`mt-5 ${style.containerBg}`}>
          <div className={`container pt- ${style.heroText}`}>
            <div className="row pt-5 ">
              <div className="col-12 d-flex justify-content-start">
                <div className="text-center">
                  <h1 className="text-uppercase text-white">
                    We will help 
                    you to grow business
                  </h1>
                  <p className="text-white fw-bold">
                    Aniket Enterprises was set up in the year 2007as a <br />
                    proprietorship concern. It was approved by the state
                    government <br />of Madhya Pradesh for industrial consultancy
                    during 2010
                  </p>
                  <a
                    href="#about"
                    className="btn btn-primary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services/>
        <Team />
        <Contact />
        
    </>
  );
}

export default Home;
