import React from 'react';
const ProjectMapCard = ({ imgUrl, cardNumber, heading, subHeading }) => {
    return (
      <div
        className={`
        cursor-pointer
        h-[700px] lg:w-[480px]
        space-y-4
        hover:bg-[url(/home/rectangle-412@2x.png)]
        duration-500
      hover:text-white
        relative
        `}
      >
        <div className="flex flex-col justify-center items-center px-12 text-center space-y-4 h-full bg-gradient-to-br hover:from-[#7647D8] hover:to[#7647D8] inset-0 hover:opacity-100">
          <h1 className="text-[65px] font-poppins">{cardNumber}</h1>
          <h3 className="text-[40px] leading-[50px] font-poppins text-center">
            {heading}
          </h3>
          <p className="text-[15px] font-poppins">{subHeading}</p>
        </div>
      </div>
    );
};

export default ProjectMapCard;