import React from "react";
import { VscTriangleDown } from "react-icons/vsc";
const PTCard = ({ text, imgUrl }) => {
  return (
    <>
      {text === "Find Project" && (
        <div className="w-full h-[210px] lg:w-[700px] lg:h-[370px] group duration-500 transition-all">
          <div className="relative text-white h-full lg:h-[343px] mx-auto w-[90%]">
            <div className="bg-[url(/home/rectangle-1460@2x.png)] bg-cover bg-center rounded-2xl bg-no-repeat w-full absolute top-0 h-[180px] lg:h-[300px]">
              <div className="h-[180px] lg:h-[300px] w-full bg-gradient-to-br group-hover:from-[#7647D8] group-hover:to[#7647D8] rounded-2xl group-hover:opacity-100">
                <div className="flex justify-center items-center h-full w-full">
                  <h1 className="font-poppins lg:text-[30px] duration-300 group-hover:scale-125">
                    {text}
                  </h1>
                </div>
              </div>
            </div>
            <VscTriangleDown className="bottom-[5.5px] left-[160px] lg:left-[270px] hidden lg:group-hover:block absolute text-[35px] lg:text-[55px] text-primary" />
          </div>
          <div className="h-[5px] bg-primary group-hover:block hidden rounded-3xl"></div>
        </div>
      )}
      {text === "Find Talent" && (
        <div className="w-full h-[210px] lg:w-[700px] lg:h-[370px] group duration-500 transition-all">
          <div className="relative text-white h-full lg:h-[343px] mx-auto w-[90%]">
            <div className="bg-[url(/home/rectangle-14601@2x.png)] bg-cover bg-center rounded-2xl bg-no-repeat w-full absolute top-0 h-[180px] lg:h-[300px]">
              <div className="h-[180px] lg:h-[300px] w-full bg-gradient-to-br group-hover:from-[#7647D8] group-hover:to[#7647D8] rounded-2xl group-hover:opacity-100">
                <div className="flex justify-center items-center h-full w-full">
                  <h1 className="font-poppins lg:text-[30px] duration-300 group-hover:scale-125">
                    {text}
                  </h1>
                </div>
              </div>
            </div>
            <VscTriangleDown className="bottom-[5.5px] left-[160px] lg:left-[270px] hidden lg:group-hover:block absolute text-[35px] lg:text-[55px] text-primary" />
          </div>
          <div className="h-[5px] bg-primary group-hover:block hidden rounded-3xl"></div>
        </div>
      )}
    </>
  );
};

export default PTCard;
