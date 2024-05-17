import React from "react";
import whatDo from "../assets/what-we-do.png";
import "../../../src/About.css";
import {
  ChevronDoubleDownIcon,
  UserIcon,
  ArrowPathRoundedSquareIcon,
  CogIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  CubeTransparentIcon,
  SparklesIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

function About() {
  return (
    <div className="container about-container">
      <div className="row">
        <div className="col-md-6">
          <img className="about-img img-fluid" src={whatDo} alt="" />
        </div>
        <div className="col-md-6">
          <p className="about-para text-center fw-bolder">
            <h3 className="card-heading">
              <span className="about-text">
                {" "}
                About <SparklesIcon className="icon02" /> Aniket Enterprises
              </span>
            </h3>
            Our Organization i.e. Aniket Enterprises was set up in the year
            2007as a proprietorship concern. It was approved by the state
            government of Madhya Pradesh for industrial consultancy during 2010.{" "}
            <br />
            We offer multiple industrial consultancy services to our clients
            from Investment Profile, Detailed Project Report and Techno Economic
            viability reports etc <br />
            <span className="hight-text">
              We offer consultancy services in different sectors like food
              processing, Engineering, Plastic, Dairy, Manufacturing and
              Construction etc.
            </span>{" "}
            <br />
            Our wide gamut of consultancy services include preparation of
            industrial feasibility reports for banks below 1 Crore and a few
            above 1.00 Cr On an average we prepare detailed project reports for
            more than 1000 clients every year <br />
            We also provide property valuation services to various banks. <br />
            We are known for our quality work, integrity and time effectiveness.{" "}
            <br />
          </p>
        </div>
      </div>

      <div className="row text-center">
        <h3 className="card-heading text-center">
          Our Services <SparklesIcon className="icon02" />
        </h3>
      </div>
      <div className="row ">
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <ArrowPathRoundedSquareIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Project Identification
          </div>{" "}
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <CogIcon className="icon" />{" "}
            </div>{" "}
            <br /> Pre Investment Feasibility Studies
          </div>
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <UserIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Detailed Project Report
          </div>{" "}
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box02">
            {" "}
            <div>
              {" "}
              <PaperAirplaneIcon className="icon" />{" "}
            </div>{" "}
            <br /> Technical & Financial Appraisal
          </div>
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box02">
            {" "}
            <div>
              {" "}
              <BuildingOfficeIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Valuation Studies for Real Estate
          </div>{" "}
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box02">
            {" "}
            <div>
              {" "}
              <CubeTransparentIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Techno Economic Viability Reports
          </div>{" "}
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <CircleStackIcon className="icon" />{" "}
            </div>{" "}
            <br /> Land Allotment Documentation
          </div>
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <ClipboardDocumentCheckIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Chartered Engineering Certificates
          </div>{" "}
        </div>
        <div className="col-md-4 text-center service-box-main">
          {" "}
          <div className="service-box">
            {" "}
            <div>
              {" "}
              <ClipboardDocumentListIcon className="icon" />{" "}
            </div>{" "}
            <br />
            Chartered Accountant Certificates
          </div>{" "}
        </div>
      </div>

      {/* <div className="parent"> */}

      <div class="bg__gradient"></div>
    </div>

    // </div>
  );
}

export default About;
