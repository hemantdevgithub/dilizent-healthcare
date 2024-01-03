import React from 'react';
import { HiOutlineOfficeBuilding, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { FiUser } from 'react-icons/fi'
import { AiOutlineMail, AiOutlineQuestion } from 'react-icons/ai'
const ContactUsSection = () => {
    return (
        <div className='bg-[url(/contact/contact-bg.png)] min-h-screen flex flex-col lg:flex-row gap-10 py-14 px-4 lg:px-24 items-center justify-center'>
            <div className='lg:w-1/2'>
                <div className='relative ml-5'>
                    <div>
                        <h2 className='text-6xl text-white font-bold'>Let's Start <br /> Something Great!</h2>
                    </div>
                    <div
                        className="border-[5px] border-b-0 border-r-0 absolute -top-2  -left-4 border-white h-12 w-12"
                    ></div>
                    <p className='text-white -ml-4 mt-5 text-xl'>
                        Proactively customize cross-media schemas rather than high-payoff the customer service. Uniquely enable extensible niche.
                    </p>
                </div>
                <div className='space-y-4 my-8'>
                    <div className='flex items-center gap-8'>
                        <div className='relative'>
                            <div className='bg-white w-24 h-20 rounded-xl absolute z-10 -skew-x-6 -top-3 left-4 flex justify-center items-center'>
                                <HiOutlineLocationMarker className='text-4xl text-primary'></HiOutlineLocationMarker>
                            </div>
                            <div className='bg-white rounded-xl w-24 h-20 opacity-25 -skew-x-6'>

                            </div>
                        </div>
                        <div>
                            <h3 className='text-[18px] font-semibold text-white uppercase'>Location</h3>
                            <h3 className='text-[18px] text-white'>Washington square park, USA</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='relative'>
                            <div className='bg-white w-24 h-20 rounded-xl absolute z-10 -skew-x-6 -top-3 left-4 flex justify-center items-center'>
                                <HiOutlineLocationMarker className='text-4xl text-primary'></HiOutlineLocationMarker>
                            </div>
                            <div className='bg-white rounded-xl w-24 h-20 opacity-25 -skew-x-6'>

                            </div>
                        </div>
                        <div>
                            <h3 className='text-[18px] font-semibold text-white uppercase'>Location</h3>
                            <h3 className='text-[18px] text-white'>Washington square park, USA</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='relative'>
                            <div className='bg-white w-24 h-20 rounded-xl absolute z-10 -skew-x-6 -top-3 left-4 flex justify-center items-center'>
                                <HiOutlineLocationMarker className='text-4xl text-primary'></HiOutlineLocationMarker>
                            </div>
                            <div className='bg-white rounded-xl w-24 h-20 opacity-25 -skew-x-6'>

                            </div>
                        </div>
                        <div>
                            <h3 className='text-[18px] font-semibold text-white uppercase'>Location</h3>
                            <h3 className='text-[18px] text-white'>Washington square park, USA</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* form section */}
            <div className='lg:w-1/2 w-full relative'>
                <div className=' bg-white lg:w-[85%] h-[680px] absolute -top-5 z-10 mx-auto space-y-7 p-9'>
                    <div className='space-y-2'>
                        <h2 className='text-4xl font-bold'>
                            Need Help?
                        </h2>
                        <p className='text-md text-accent'>
                            Proactively fashion world-class leadership vis-a-vis enterprise e-services. Great strong leadership.
                        </p>
                    </div>
                    <form className=' space-y-5'>
                        <div className='relative'>
                            <input type="text" className='input h-[55px] text-accent pl-10 w-full bg-[#F7F7F7E6]  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg' placeholder='Name' name="" id="" />
                            <FiUser className='absolute top-[19px] text-[18px] text-accent left-4' ></FiUser>
                        </div>
                        <div className='relative'>
                            <input type="email" className='input h-[55px] text-accent pl-10 w-full bg-[#F7F7F7E6]  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg' placeholder='Email' name="" id="" />
                            <AiOutlineMail className='absolute top-[19px] text-[18px] text-accent left-4' ></AiOutlineMail>
                        </div>
                        <div className='relative'>
                            <select type="text" className='input h-[55px] text-accent pl-10 w-full bg-[#F7F7F7E6]  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg' placeholder='Name' name="" id="">
                                <option>Type of inquiry</option>
                                <option>Profit</option>
                                <option>Non Profit</option>
                            </select>
                            <AiOutlineQuestion className='absolute top-[19px] text-[18px] text-accent left-4' ></AiOutlineQuestion>
                        </div>
                        <div>
                            <div className='relative'>
                                <textarea type="email" className='input h-[155px] py-4 text-accent pl-10 w-full bg-[#F7F7F7E6]  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg' placeholder='Email' name="" id=""></textarea>
                                <AiOutlineMail className='absolute top-[19px] text-[18px] text-accent left-4' ></AiOutlineMail>
                            </div>
                        </div>
                        <div>
                            <input type='submit' value={'send inquiry'} className='w-full bg-primary rounded-full uppercase text-white text-xl font-bold py-5' />
                        </div>
                    </form>
                </div>
                <div className='bg-white lg:w-[85%] h-[680px] opacity-50 mx-auto'>

                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;