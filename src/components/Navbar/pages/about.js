import React from "react";
import NavbarHome from "../Navbar";
import "./about.css";
import a1 from "./images/a1.jpg";
import a2 from "./images/a2.jpg";
import a3 from "./images/a3.jpg";

function About() {
  return (
    <>
      <NavbarHome />
      <div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="main-heading">Our Company</h1>
                <div className="underline mx-auto"></div>
                <p style={{ fontSize: "1.5rem" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About us */}
        <section className="section bg-c-light border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">Our Team</h3>
                <div className="underline mx-auto"></div>
              </div>
              <div className="col-md-4 text-center">
                <img
                  //   className="w-70 border-bottom rounded-circle"
                  className="img-fluid border-bottom rounded-circle"
                  alt="100x100"
                  // src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  src={a2}
                  data-holder-rendered="true"
                />
                <a href="https://www.linkedin.com/in/devansh-dixit/">
                  <h2>Devansh Dixit</h2>
                </a>
                <h3>CEO</h3>
                <br></br>
                <br></br>
              </div>

              <div className="col-md-4 text-center ">
                <img
                  //   className="w-70 border-bottom rounded-circle "
                  className="img-fluid border-bottom rounded-circle"
                  alt="100x100"
                  // src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  src={a3}
                  data-holder-rendered="true"
                />

                <a href="https://www.linkedin.com/in/nitin-arul-a220341b1/">
                  <h2>Nitin A.</h2>
                </a>
                <h3>CTO</h3>
                <br></br>
                <br></br>
              </div>

              <div className="col-md-4 text-center">
                <img
                  //   className="w-70 rounded-circle z-depth-2"
                  className="img-fluid border-bottom rounded-circle"
                  alt="100x100"
                  // src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  src={a1}
                  data-holder-rendered="true"
                />
                <a href="https://www.linkedin.com/in/ayush-kumar-945817205/">
                  <h2>Ayush Kumar</h2>
                </a>
                <h3>Web Developer</h3>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
