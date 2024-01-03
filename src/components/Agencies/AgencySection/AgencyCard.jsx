import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const AgencyCard = ({ company }) => {
    const { companyLogo,companyAddress, companyName, companyDescription, services } = company;
    return (
        <div className='border-2 rounded-xl shadow-xl p-5 grid grid-cols-1 lg:grid-cols-3 items-center space-y-4'>
            <div className='flex items-center gap-2'>
                <img src={companyLogo} className='h-[100px] w-[100px]' alt="" />
                <div>
                    <h3 className='text-[18px] font-bold text-secondary'>{companyName}</h3>
                    <p className='text-[15px] text-secondary font-semibold'>{companyAddress}</p>
                </div>
            </div>
            <div>
                <h2 className='text-[18px] font-semibold'>Description:
                    <span className='text-primary'> {companyDescription.slice(0, 40)}...</span>
                </h2>
                <p className='font-semibold'>Services: {services[0]}, {services[1]}</p>
            </div>
            <div className='flex items-center lg:justify-center gap-3 text-primary'>
                <p className='font-bold'>Connect:</p>
                <FaFacebook/>
                <FaInstagram/>
                <FaLinkedin/>
                <FaYoutube/>
                <FaWhatsapp/>
                <FaTwitter/>
            </div>
        </div>
    );
};

export default AgencyCard;