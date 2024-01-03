import React from 'react';
import { HiOutlineOfficeBuilding, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

const AddressSection = () => {
    return (
        <>
            <div className="bg-[url(/contact/address-bg.png)] min-h-[60vh] my-14 py-10">
                <div className='flex justify-center items-center my-7'>
                    <div className='relative '>
                        <h2 className="text-3xl lg:text-[50px] text-center text-secondary font-bold">Our worldwide office</h2>
                        <div
                            className="border-[5px] border-b-0 border-r-0 absolute -top-2 -left-8 border-primary h-7 w-7 lg:h-12 lg:w-12"
                        ></div>
                        <div
                            className="border-[5px] border-b-0 border-l-0 absolute -top-2 -right-8 border-primary h-7 w-7 lg:h-12 lg:w-12"
                        ></div>
                    </div>
                </div>
                <div className='lg:w-[70%] px-4 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 my-6 gap-6'>
                        <div className='bg-white rounded-2xl shadow-md space-y-4 pl-10 py-7'>
                            <HiOutlineOfficeBuilding className="text-[50px] text-primary"></HiOutlineOfficeBuilding>
                            <h2 className='font-bold text-secondary text-[30px]'>Head Office</h2>
                            <div className='space-y-2'>
                                <div className='flex items-center gap-3'>
                                    <HiOutlineLocationMarker className='text-primary text-xl '></HiOutlineLocationMarker>
                                    <h5 className='text-accent'>
                                        18 Petworth Washington DC
                                    </h5>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <HiOutlineMail className='text-primary text-xl '></HiOutlineMail>
                                    <h5 className='text-accent'>info@email.com</h5>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <HiOutlinePhone className='text-primary text-xl '></HiOutlinePhone>
                                    <h5 className='text-accent'>(00) 123 456 789 00</h5>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow-md space-y-4 pl-10 py-7'>
                            <HiOutlineOfficeBuilding className="text-[50px] text-primary"></HiOutlineOfficeBuilding>
                            <h2 className='font-bold text-secondary text-[30px]'>Europe Office</h2>
                            <div className='space-y-2'>
                                <div className='flex items-center gap-3'>
                                    <HiOutlineLocationMarker className='text-primary text-xl '></HiOutlineLocationMarker>
                                    <h5 className='text-accent'>
                                        44 Broad St, West Midland
                                    </h5>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <HiOutlineMail className='text-primary text-xl '></HiOutlineMail>
                                    <h5 className='text-accent'>info@email.com</h5>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <HiOutlinePhone className='text-primary text-xl '></HiOutlinePhone>
                                    <h5 className='text-accent'>(00) 123 456 789 00</h5>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow-md space-y-4 pl-10 py-7'>
                            <HiOutlineOfficeBuilding className="text-[50px] text-primary"></HiOutlineOfficeBuilding>
                            <h2 className='font-bold text-secondary text-[30px]'>Asia Office</h2>
                            <div className='space-y-2'>
                                <div className='flex items-center gap-3'>
                                    <HiOutlineLocationMarker className='text-primary text-xl '></HiOutlineLocationMarker>
                                    <h5 className='text-accent'>
                                        10 Yanaka, Tokyo, Japan
                                    </h5>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <HiOutlineMail className='text-primary text-xl '></HiOutlineMail>
                                    <h5 className='text-accent'>info@email.com</h5>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <HiOutlinePhone className='text-primary text-xl '></HiOutlinePhone>
                                    <h5 className='text-accent'>(00) 123 456 789 00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default AddressSection;