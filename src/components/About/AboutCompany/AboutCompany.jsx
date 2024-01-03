import React from "react";
import DetailsHeading from "./DetailsHeading";

const AboutCompany = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto space-y-10">
        <div className="flex justify-center items-center my-16">
          <div className="relative ">
            <h2 className="text-3xl lg:text-[50px] text-center text-secondary font-bold">
              About Us
            </h2>
            <div className="border-[5px] border-b-0 border-r-0 absolute -top-4 -left-8 border-primary h-7 w-7 lg:h-8 lg:w-8"></div>
            <div className="border-[5px] border-b-0 border-l-0 absolute -top-4 -right-8 border-primary h-7 w-7 lg:h-8 lg:w-8"></div>
          </div>
        </div>
        <p className="text-justify text-[22px] mb-10 text-gray-800">
          At Dilizent, we are a cutting-edge healthcare digital firm dedicated to revolutionizing the way healthcare organizations operate in the digital landscape. With a passion for innovation and a commitment to excellence, we strive to empower healthcare providers with advanced digital solutions that enhance efficiency, improve patient outcomes, and elevate the overall healthcare experience.
        </p>
        <div>
          <DetailsHeading text={"Who We Are:"} />
          <p className="text-justify text-[18px]">
            DDilizent stands at the forefront of the healthcare digital revolution. As a team of forward-thinkers and industry experts, we bring a wealth of experience to the table, blending technology and healthcare expertise to address the unique challenges faced by the industry.
          </p>
        </div>
        <div>
          <DetailsHeading text={"Our Mission:"} />
          <p className="text-justify text-[18px]">
            Our mission at Dilizent is to empower healthcare organizations to embrace the full potential of digital transformation. We believe in leveraging technology to optimize processes, improve patient care, and drive operational excellence across the healthcare ecosystem.
          </p>
        </div>
        <div>
          <DetailsHeading text={"What Sets Us Apart:"} />
          <p className="text-justify text-[18px]">
            In a rapidly evolving digital landscape, Dilizent stands out for its commitment to delivering tailored solutions that cater to the specific needs of healthcare providers. We understand the intricacies of the healthcare industry and design our digital offerings to streamline workflows, enhance communication, and ultimately contribute to better patient outcomes.
          </p>
        </div>
        <div>
          <DetailsHeading text={"Our Solutions:"} />
          <p className="text-justify text-[18px]">
            Explore a comprehensive suite of digital solutions tailored for healthcare, including provider data management, workforce optimization, talent management, contract and spend management, access control, and compliance solutions. Our robust offerings are designed to meet the diverse needs of healthcare organizations, from large hospitals to small clinics.
          </p>
        </div>
        <div>
          <DetailsHeading text={"Why Choose Dilizent :"} />
          <ul className="text-justify text-[18px] list-disc px-10 space-y-3">
            <li>
              Expertise: Benefit from the deep industry knowledge and technical proficiency of our team.
            </li>
            <li>
              Innovation: Stay ahead in the digital era with our cutting-edge solutions and continuous innovation.
            </li>
            <li>
              Partnership: We view our clients as partners, working collaboratively to achieve shared goals and success.
            </li>
            <li>
              Commitment: Dilizent is dedicated to the success of healthcare providers, ensuring our solutions make a positive impact on both operations and patient care.
            </li>
          </ul>
        </div>
        <div>
          <DetailsHeading text={"Join Us on the Digital Healthcare Journey:"} />
          <p className="text-justify text-[18px]">
            Embark on a transformative journey with Dilizent and experience the power of seamless digital solutions tailored for the healthcare industry. Whether you are a hospital administrator, a healthcare professional, or an IT enthusiast, we invite you to explore the possibilities of a digitized future with Dilizent. Together, let's shape the future of healthcare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
