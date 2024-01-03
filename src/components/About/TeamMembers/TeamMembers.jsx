import React from "react";
import PingAnimation from "../../Home/PingAnimation";
import { BiShareAlt } from "react-icons/bi";
import TeamMemberCard from "../../shared/TeamMemberCard/TeamMemberCard";
import { Link } from "react-router-dom";

const TeamMembers = () => {
  return (
    <div className="my-24">
      <div className="w-[75%] mx-auto">
        <div className="relative">
          <h2 className="text-[45px] leading-10 font-bold text-secondary">
            Professional Team
          </h2>
          <div className="border-[5px] border-b-0 border-r-0 absolute -top-4 -left-6 border-primary h-8 w-8 lg:h-12 lg:w-12"></div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 my-10">
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
            img={"/about/praveen.png"}
            role={"Chief Technology Officer"}
            name={"Praveen"}
          /> */}

          {/* <TeamMemberCard
            img={"/about/imran.png"}
            role={"Full Stack Developer"}
            name={"Imran Nazir"}
          />

          <TeamMemberCard
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
        <div className="text-center">
          <Link to={"/team"}>
            <button className="bg-primary font-bold text-white px-8 py-4 rounded-full">
              View Full Members
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
