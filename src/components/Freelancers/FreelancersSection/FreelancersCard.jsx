import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdCheckBox } from 'react-icons/md'
const FreelancersCard = ({ prof }) => {
    const { img, name, skills, availableDays, slot , experience} = prof;
    return (
        <div className='border-2 rounded-xl shadow-xl p-5 flex flex-col lg:flex-row gap-5 lg:gap-3 lg:justify-between lg:items-center'>
            <div className='flex items-center gap-3'>
                <img src={img} className='h-[100px] w-[100px] rounded-full' alt="" />
                <div>
                    <h3 className='text-[18px] font-bold text-secondary'>{name}</h3>
                    <p className='text-[15px] text-secondary font-semibold'>{experience}</p>
                    <div className='mt-3'>
                        <p className='font-bold text-[16px]'>Connect:</p>
                        <div className='flex justify-between gap-3'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaYoutube />
                            <FaWhatsapp />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-[18px] font-semibold'>Skills:
                    <span className='text-primary'> {skills[0]}, {skills[1]}, {skills[2]}</span>
                </h2>
                <h4>Available Days:</h4>
                <div className='flex gap-3 text-accent'>
                    {
                        availableDays.map((d, index) => <span
                            className='flex items-center'
                            key={index}><MdCheckBox />{d}</span>)
                    }
                    
                </div>
            </div>
            <div>
                <p className='font-semibold'>Slot: {slot}</p>
            </div>
        </div>
    );
};

export default FreelancersCard;