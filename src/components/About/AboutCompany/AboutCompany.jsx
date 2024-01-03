import React from "react";
import DetailsHeading from "./DetailsHeading";

const AboutCompany = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto">
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
          Dilizent builds low-cost highly performing web, mobile (android, iOS) applications for the customers. We build projects based on waterfall or agile methodologies as per customer choices. We partner with customers to build business requirements.
        </p>
        <div>
          <DetailsHeading text={"Social Aim"} />
          <p className="text-justify text-[18px]">
          Dilizent started its business to earn revenues, which will help Dilizent build public benefit platforms for people with barriers. 
          </p>
        </div>
        <div>
          <DetailsHeading text={"Empowering Professionals"} />
          <p className="text-justify text-[18px]">
            For professionals seeking their next challenge, Dilizent offers a
            thriving marketplace of exciting projects waiting to be discovered.
            Showcase your skills, experience, and past accomplishments through
            your comprehensive profile. Gain visibility, attract potential
            clients, and receive project invitations that match your expertise.
            Whether you're an independent freelancer or a team of professionals,
            Dilizent provides the platform to showcase your talent and find
            rewarding opportunities.
          </p>
        </div>
        <div>
          <DetailsHeading text={"Collaboration and Success"} />
          <p className="text-justify text-[18px]">
            At Dilizent, we understand the significance of collaboration in
            achieving remarkable results. Our platform encourages seamless
            communication and collaboration between clients and professionals,
            fostering an environment where ideas flourish and projects thrive.
            Collaborate, share insights, and iterate with your team, utilizing
            our intuitive project management tools to ensure smooth progress and
            successful project completion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
