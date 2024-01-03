import React from "react";
import ButtonArrowToRight from "../../Home/ButtonArrowToRight";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { heading, subHeading, id } = service;
  return (
    <div className="bg-white p-[30px] rounded-2xl group">
      <div className="space-y-4">
        <img
          src="/services/service-img-3.png"
          className="rounded-2xl group-hover:scale-105 duration-300"
          alt=""
        />
        <h2 className="text-[22px] font-bold group-hover:text-primary duration-300">
          {heading}
        </h2>
        <p className="text-accent text-justify text-[14px]">{subHeading}</p>
      </div>
      <div>
        <Link to={"/service-details"} state={{ id: id }}>
          <ButtonArrowToRight></ButtonArrowToRight>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
