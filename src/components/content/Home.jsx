import React from "react";
import style from "./Home.module.css";
import heroImg from "../assets/hero.png";
function Home() {
  return (
    <>
      <section>
      <div className={`mt-5 ${style.containerBg}`}>
  <div className={`container pt- ${style.heroText}`}>
    <div className="row pt-5 ">
      <div className="col-12 d-flex justify-content-start">
        <div className="text-center">
          <h1 className="text-uppercase text-white">We will help <br />you to grow business</h1>
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
      <section id="about">
        <div className="container"></div>
      </section>
    </>
  );
}

export default Home;
