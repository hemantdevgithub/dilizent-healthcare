import React from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import TeamMemberCard from "../components/shared/TeamMemberCard/TeamMemberCard";

const Team = () => {
  return (
    <>
      <TopBanner heading={"Our Team"} img={"/team/team-bg.jpg"}></TopBanner>


      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 my-16">
        <TeamMemberCard
          img="https://media.licdn.com/dms/image/C4D03AQG_yC3CqZN4_Q/profile-displayphoto-shrink_100_100/0/1661936125512?e=1703116800&v=beta&t=Tv4PScAHmWF_BRRMCPy0Gqd4RPbhhsZdCfDyiak9dZU"
          role={"Director"}
          name={"Sonia Yadav"}
        />

        <TeamMemberCard
          img="https://media.licdn.com/dms/image/D4D03AQGNphXJnrXqeg/profile-displayphoto-shrink_400_400/0/1693279910206?e=1703116800&v=beta&t=EarwxooQzXp15YR_-Dbyh_cH6acpxWzZDi6rTSM0mGE"
          role={"Senior Manager"}
          name={"Garima"}
        />
       
        {/* <TeamMemberCard
          img={"/about/"}
          role={"Full Stack Developer"}
          name={""}
        /> */}

        {/* <TeamMemberCard
          img={"/about/nayan.png"}
          role={"Full Stack Developer"}
          name={"Nayan"}
        />

        <TeamMemberCard
          img={"/about/partho-bg.png"}
          role={"Full Stack Developer"}
          name={"Partho Roy"}
        /> */}
      </div>
    </>
  );
};

export default Team;
