import React from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import TeamMembers from "../components/About/TeamMembers/TeamMembers";
import AboutCompany from "../components/About/AboutCompany/AboutCompany";

const About = () => {
  return (
    <div>
      <TopBanner
        img={"/about/top-banner-about.jpg"}
        heading={"About Us"}
        pageName={'About'}>
      </TopBanner>
      <AboutCompany/>
      <TeamMembers/>
    </div>
  );
};

export default About;
