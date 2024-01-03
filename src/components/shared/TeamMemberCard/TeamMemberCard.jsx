import React from "react";
import { BiShareAlt } from "react-icons/bi";

const TeamMemberCard = ({ img, role, name }) => {
  return (
    <div className="rounded-3xl bg-white shadow-xl group">
      <div
        className="bg-[#ECF4FF] relative flex justify-center h-[240px]"
        style={{ borderRadius: "20px 20px 25px 0px" }}
      >
        <img
          src={img}
          className="h-full object-fill object-center w-full z-10"
          alt=""
        />
        <img
          src="/about/shape.png"
          className="top-12 left-18 absolute h-36 w-36 group-hover:rotate-[30deg] duration-300"
          alt=""
        />
        <button className="bg-white h-7 flex justify-center items-center rounded-full w-7 bottom-4 absolute z-10 right-3 group-hover:animate-ping">
          <BiShareAlt className="text-primary "></BiShareAlt>
        </button>
      </div>
      <div className="text-center my-3 h-[70px] space-y-2 flex flex-col justify-center">
        <h3 className="text-xl text-secondary group-hover:text-primary font-bold">
          {name}
        </h3>
        <p className="text-accent">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
