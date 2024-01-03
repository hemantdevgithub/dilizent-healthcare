import React from 'react';

const DetailsHeading = ({text}) => {
    return (
      <div className="flex justify-start pl-4 my-7 items-center">
        <div className="relative ">
          <h2 className="text-2xl lg:text-[30px] text-center text-secondary font-bold">
            {text}
          </h2>
          <div className="border-[5px] border-b-0 border-r-0 absolute -top-2 -left-4 border-primary h-7 w-7 lg:h-8 lg:w-8"></div>
        </div>
      </div>
    );
};

export default DetailsHeading;