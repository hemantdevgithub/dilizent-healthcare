import React from 'react';

const PartnershipSection = () => {
    return (
        <div className=' flex items-center py-28'>
            <div className='px-4 lg:w-[85%] flex flex-col lg:flex-row mx-auto gap-10'>
                <div className='lg:w-2/5'>
                    <div className='relative ml-5'>
                        <h2 className='text-[40px] font-bold text-secondary'>
                            We Partnered With 1k+ Companies
                        </h2>
                        <div
                            className="border-[5px] border-b-0 border-r-0 absolute -top-1 -left-5 border-primary h-7 w-7 lg:h-12 lg:w-12"
                        ></div>
                        <p className='text-accent'>
                            Quickly aggregate B2B users and worldwide in potential your data. Progressively plagiarize resource-leveling e-commerce business data services.
                        </p>
                        <button className='bg-primary mt-7 px-5 py-3 rounded-full font-bold text-white'>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className='lg:w-[50%] px-4 lg:px-0 grid grid-cols-2 lg:grid-cols-3 border divide-x divide-y'>
                    <div className='p-10'>
                        <img src="/about/client_img_1.png" alt="" />
                    </div>
                    <div className='p-10'>
                        <img src="/about/client_img_2.png" alt="" />
                    </div>
                    <div className='p-10'>
                        <img src="/about/client_img_3.png" alt="" />
                    </div>
                    <div className='p-10'>
                        <img src="/about/client_img_4.png" alt="" />
                    </div>
                    <div className='p-10'>
                        <img src="/about/client_img_5.png" alt="" />
                    </div>
                    <div className='p-10'>
                        <img src="/about/client_img_6.png" alt="" />
                    </div>
                    <div className='p-10'>
                        <img src="/about/client_img_7.png" alt="" />
                    </div>
                    <div className='p-10'>
                        <img src="/about/client_img_8.png" alt="" />
                    </div>
                    <div className='p-10'>
                        <img src="/about/client_img_9.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnershipSection;