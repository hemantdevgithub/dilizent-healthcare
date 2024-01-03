import React from "react";
import { FaInstagram, FaLinkedin, FaMinus, FaTwitter } from "react-icons/fa";

const TestimonialCard = ({ review }) => {
  // Destructuring review data
  const { name, img, designation, casestudy, Testimonial} = review || {};
  return (
    <div className="flex flex-col lg:flex-row gap-10 border-b-[3px] rounded-lg p-5">
      <div className="lg:w-[15%]">
        <img src={img} className="h-32 mx-auto" alt="" />
        <div className="flex justify-evenly items-center text-xl text-primary my-5">
          <FaLinkedin />
          {/* <FaInstagram />
          <FaTwitter /> */}
        </div>
      </div>
      <div className="lg:w-[85%]">
        <h2 className="text-2xl text-primary uppercase font-bold">{name}</h2>
        <div className="h-[2px] bg-primary w-[80px]"></div>
        <p className="text-lg py-3 font-semibold text-justify text-accent">
          {designation}
        </p>
        <p className="text-lg py-3 font-semibold text-justify text-accent">
          <h1><strong>Case Study :</strong></h1>{casestudy}
        </p>
        <p className="text-lg py-3 font-semibold text-justify text-accent">
        <h1><strong>Testimonial :</strong></h1>{Testimonial}
        </p>
        {/* <p className="opacity-60 text-justify">{about}</p> */}
      </div>
    </div>
  );
};

export default TestimonialCard;
