import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai'
const ServiceDetail = ({ serviceDetail }) => {
    const { heading, description, id, services } = serviceDetail
    return (
        <div className='my-20 min-h-screen'>
            <div className='px-5 lg:w-[75%] mx-auto'>
                <div className='space-y-10'>
                    <div className='flex justify-start pl-8 items-center my-7'>
                        <div className='relative '>
                            <h2 className="text-2xl lg:text-[40px] text-center text-secondary font-bold">
                                {heading}
                            </h2>
                            <div
                                className="border-[5px] border-b-0 border-r-0 absolute -top-4 -left-8 border-primary h-7 w-7 lg:h-12 lg:w-12"
                            ></div>
                        </div>
                    </div>
                    <h4 className='lg:text-xl text-accent font-semibold text-justify'>
                        {description}
                    </h4>
                    <img src="/serviceDetail/services-details.jpg" className='w-full rounded-lg' alt="" />
                </div>
                {/* Service Offered */}
                <div className='my-10 space-y-7'>
                    <div className='flex justify-start pl-8 items-center my-14'>
                        <div className='relative '>
                            <h2 className="text-2xl lg:text-[40px] text-center text-secondary font-bold">
                                Service Offered
                            </h2>
                            <div
                                className="border-[5px] border-b-0 border-r-0 absolute -top-4 -left-8 border-primary h-7 w-7 lg:h-12 lg:w-12"
                            ></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                        {
                            services.map((s, index) => <div key={index} className='flex gap-6 items-center'>
                                <button className=' bg-primary text-white text-2xl rounded-full p-[2px]'>
                                    <AiOutlineCheck />
                                </button>
                                <p className='text-xl text-accent font-semibold'>
                                    {s}
                                </p>
                            </div>)
                        }
                    </div>
                    <div className='space-y-4'>
                        <img src="/serviceDetail/service-single-meeting.png" className='w-full rounded-lg' alt="" />
                        <p className='text-accent text-[18px] text-justify font-semibold'>
                            Proactively restore timely applications for orthogonal architectures. Dynamically actualize 2.0 vis-a-vis 24/7 niches. Dramatically e-services grow cooperative intellectual capital through ethical customer service. E-enable collaborative services whereas B2B infrastructures. Energistically negotiate functional methods of empowerment for 24/365 deliverables enthusiastically. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;