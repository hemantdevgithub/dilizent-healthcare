import React from 'react';
import img1 from '/contact/img1.png'
import { IoTriangleSharp } from 'react-icons/io5'
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
                    <div className='text-white z-10 py-8 flex lg:flex-row gap-4'>
                        {/* TODO */}
                        <button>
                            Icon
                        </button>
                        <div>
                            <h3 className='text-xl'>Call Us 24/7</h3>
                            <h2 className='text-2xl font-bold'>
                                (00) 123 456 789
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmallBanner;