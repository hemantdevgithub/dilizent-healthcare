import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdCheckBox } from 'react-icons/md'
const FreelancersGridCard = ({ prof }) => {
    const { img, name, skills, availableDays, slot, experience } = prof;
    return (
        <div className='rounded-xl p-2 border-2 shadow-xl'>
            <div className='relative mb-8'>
                <div
                    className='h-[100px] rounded-xl rounded-b-none'
                    style={{ background: 'linear-gradient(to right, rgb(114, 47, 181), rgb(112, 148, 184))' }}
                >
                </div>
                <img src={img} className='h-[80px] w-[80px] absolute top-12 left-4 rounded-full' alt="" />
                <div className='absolute top-8 text-white right-5 font-semibold'>
                    <p className='uppercase'>{name}</p>
                    <p>{experience}</p>
                </div>
            </div>
            <div className='px-3 text-justify space-y-3'>
                <p className='text-[18px] font-semibold'>Skills:
                    <span className='text-primary'> {skills[0]}, {skills[1]}, {skills[2]}</span>
                </p>
                <div className='text-accent'>
                    <h4>Available Days:</h4>
                    <div className='flex justify-between items-center'>
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
            <div className='flex items-center text-[18px] px-3 gap-3 mt-2 text-primary'>
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

export default FreelancersGridCard;