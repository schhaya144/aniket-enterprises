import React from "react";
import style from "./Home.module.css";
function Home() {
  return (
    <>
      <div className={` ${style.containerBg}`}>
        <div className="container pt-5">
        <div className="row ">
          <div className="col-md-6 pt-5">
            <h2>We help you to grow business</h2>
          </div>
          <div className="col-md-6"></div>
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
