import React from "react";

const ServicesOverview = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col lg:flex-row justify-center gap-10 w-[80%] mx-auto">
        <div className="lg:w-1/2">
          <img
            src="/services/service.jpg"
            className="rounded-2xl w-full lg:w-[90%]"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 lg:px-10 flex flex-col justify-evenly">
          <div className="relative">
            <h1
              className="text-[26px] lg:text-[40px] font-bold text-secondary"
              style={{ lineHeight: "50px" }}
            >
              We Provide A Wide Range Of IT Services
            </h1>
            <div className="border-[5px] border-b-0 border-r-0 absolute -top-2 -left-4 border-primary h-10 w-10 lg:h-10 lg:w-10"></div>
          </div>
          <div className="text-accent text-justify text-lg my-5 space-y-4">
            <p>
              Welcome to Dilizent – your trusted partner in the dynamic realm of Information Technology. Our service page serves as your gateway to a diverse spectrum of cutting-edge solutions meticulously tailored to align with your business requisites. Rooted in an unwavering commitment to excellence, we are dedicated to empowering your organization through the prowess of technology.
            </p>
            {/* <p>
              Malesuada bibendum arcu vitae elementum. Semper eget duis at
              tellus at urna ums condimentum. Aliquam malesuada bibendum arcu
              vitae dislam elementum curabitur nunc munoces sed.
            </p> */}
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <h4 className="text-3xl font-semibold text-secondary">
                Trustpilot
              </h4>
              <img
                src="/services/trustpilot-member.png"
                className="h-12"
                alt=""
              />
              <p>More than 20+ amazing feedbacks</p>
            </div>
            <div className="space-y-4">
              {/* <h1 className="text-5xl font-semibold text-primary">90%</h1> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
