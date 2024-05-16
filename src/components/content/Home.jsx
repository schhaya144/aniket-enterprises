import React from "react";
import style from "./Home.module.css";
import heroImg from "../assets/hero.png"
function Home() {
  return (
    <>
      <div className={` ${style.containerBg}`}>
        <div className="container pt-5">
        <div className="row ">
          <div className="col-md-6 d-flex justify-content-center text-align-center">
            <h1 className="text-uppercase">We help you to grow business</h1>
            
          </div>
          <div className="col-md-6 pt-5">
            <img src={heroImg} alt="" className="w-75"/>
          </div>
        </div>
        </div>
      </div>
      <section id="about">
        <div className="container"></div>
      </section>
    </>
  );
}

export default Home;
