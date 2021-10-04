import React from "react";

import AboutHero from "./about_components/AboutHero";
import PastExperience from "./about_components/PastExperience";
import Education from "./about_components/Education";

function AboutPage() {
  return (
    <>
      <AboutHero />
      <PastExperience />
      <Education />
    </>
  );
}

export default AboutPage;
