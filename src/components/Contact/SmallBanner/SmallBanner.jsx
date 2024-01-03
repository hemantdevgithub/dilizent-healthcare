import React from 'react';
import img1 from '/contact/img1.png'
import { IoTriangleSharp } from 'react-icons/io5'
import { MdOutlineMail } from "react-icons/md";
const SmallBanner = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row '>
                <div className='bg-secondary lg:w-[70%] flex items-center  gap-4 justify-center px-4'>
                    <h1 className='text-[34px] text-white font-bold py-5'>
                        Let's Start Something <span className='text-primary'>Great!</span>
                    </h1>
                    <img src={img1} className='w-14 hidden lg:block' alt="" />
                </div>
                <div className='bg-primary  lg:w-[30%] flex relative items-center justify-center'>
                    <IoTriangleSharp className='text-[175px] -left-[88px] -top-[10px] text-primary absolute'></IoTriangleSharp>
                    <div className='text-white z-10 py-8 flex items-center lg:flex-row gap-4'>
                        {/* TODO */}
                        <MdOutlineMail />
                        info@dilizent.com
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmallBanner;