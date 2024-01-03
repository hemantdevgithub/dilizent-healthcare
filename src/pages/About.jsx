import React from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import TeamMembers from "../components/About/TeamMembers/TeamMembers";
import AboutCompany from "../components/About/AboutCompany/AboutCompany";
import Container from "../components/Container/Container";

const About = () => {
  return (
    <div>
      <TopBanner
        img={"/about/top-banner-about.jpg"}
        heading={"About Us"}
        pageName={'About'}>
      </TopBanner>
      <Container>
        <div className="pb-20">
          <AboutCompany />
        </div>
      </Container>
      {/* <TeamMembers/> */}
    </div>
  );
};

export default About;
