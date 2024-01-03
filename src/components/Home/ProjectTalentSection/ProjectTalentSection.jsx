import React from "react";
import "./PTCard";
import Container from "../../Container/Container";
import PTCard from "./PTCard";

const ProjectTalentSection = () => {
  return (
    <Container>
      <div className="my-16">
        <div className="text-center mb-5">
          <h1 className="text-[30px] lg:text-[40px] font-semibold font-poppins">
            Everything you need to begin with
          </h1>
          <p className="text-[18px] text-secondary">
            Rocket-launch your project with a stellar star!
          </p>
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <div>
            <PTCard
              text={"Find Project"}
              imgUrl={"/home/rectangle-1460@2x.png"}
            ></PTCard>
          </div>
          <div>
            <PTCard
              text={"Find Talent"}
              imgUrl={"/home/rectangle-14601@2x.png"}
            ></PTCard>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectTalentSection;
