import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
const AgencyGridCard = ({ company }) => {
    const { companyLogo, companyAddress, companyName, companyDescription, services } = company;
    return (
        <div className='rounded-xl p-2 border-2 shadow-xl'>
            <div className='relative mb-8'>
                <div
                    className='h-[100px] rounded-xl rounded-b-none'
                    style={{ background: 'linear-gradient(to right, rgb(114, 47, 181), rgb(112, 148, 184))' }}
                >
                </div>
                <img src={companyLogo} className='h-[80px] w-[80px] absolute top-12 left-4 rounded-full' alt="" />
                <div>
                    <p className='text-white absolute right-6 font-bold uppercase top-12'>{companyName}</p>
                </div>
            </div>
            <div className='px-3 text-justify'>
                <p className='text-[18px] font-semibold'>Description:
                    <span className='text-primary'> {companyDescription.slice(0, 40)}...</span>
                </p>
                <p className='text-[18px] font-semibold'>Services:
                    <span className='text-primary'> {services[0]}, {services[1]}</span>
                </p>
            </div>
            <div className='flex items-center text-[18px] px-3 gap-3 text-primary'>
                <p className='font-bold text-secondary'>Connect:</p>
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaYoutube />
                <FaWhatsapp />
                <FaTwitter />
            </div>
        </div>
    );
};

export default AgencyGridCard;