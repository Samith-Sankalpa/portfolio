import React from "react";

import "../../index.css";

function Hero() {
  return (
    <div className="container">
      <div className="grid grid--1x2">
        <div className="hero__content">
          <p className="hero__title">UI / UX Engineer</p>
          <p className="hero__caption">
            <span className="highlight">Common sense</span> is my weapon.
            Accordingly, it is my ability to solve problems with the most
            appropriate solution that can be provided to properly study the
            users and <span className="highlight">Satisfy.</span>
          </p>
          <p className="hero__subtitle">Welcome to my portfolio,</p>
          <div className="contact-container">
            <div>
              <a href="#">
                <img src="/linkedin.png"></img>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/behance.png"></img>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/facebook.png"></img>
              </a>
            </div>
          </div>
        </div>

        <img className="hero__image" src="/SamithSankalpa.png"></img>
      </div>
    </div>
  );
}

export default Hero;
