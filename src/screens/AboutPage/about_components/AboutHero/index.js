import React from "react";

import "../../about.css";

function AboutHero() {
  return (
    <div className="about-container">
      <div className="test--border">
        <div className="about about--1x2">
          <div className="about__image">
            <img className="hero__image" src="/SamithSankalpa.png"></img>
          </div>
          <div className="about__content">
            <p className="about__name">Hi, I’m Samith Sankalpa</p>
            <p className="about__caption">
              Currently, I lead product design on the Democratic National
              Committee’s tech team. I work with product, data and engineering
              colleagues to build out the foundation and infrastructure that
              lifts up all Democratic organizations and campaigns.
            </p>
            <p className="about__caption">
              In the past, I worked with a range of startup, enterprise and
              civic-tech product design teams including Apple, Huckleberry,
              PG&E, Newgistics and more. I also support civic tech and nonprofit
              projects including Tech for Campaigns, Opera Ewardsville and
              Haymarket Opera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
