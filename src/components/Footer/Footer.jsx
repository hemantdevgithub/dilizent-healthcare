import React from 'react';
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs'
import SmallBanner from '../Contact/SmallBanner/SmallBanner';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <SmallBanner></SmallBanner>
            <div className='bg-white flex items-center relative'>
                <img src="/contact/footer1.png" className='bottom-0 h-64 hidden lg:block absolute left-0' alt="" />
                <img src="/contact/footer2.png" className='top-0 h-64 absolute right-0 hidden lg:block' alt="" />
                <div className='lg:w-[78%] px-4 py-16  mx-auto grid grid-cols-1 lg:grid-cols-4'>
                    <div className='p-10 space-y-5'>
                        <img src="/logo/logo.png" className='h-16 rounded-full' alt="" />
                        <p className='text-accent text-[13px] font-semibold'>
                            Empowering Your Digital Potential - Dilizent Solutions for IT Excellence.
                        </p>
                        <div className='flex gap-2'>
                            <button className='text-primary bg-[#E7ECFD] p-2 rounded-full hover:bg-primary hover:text-white duration-200'>
                                <FaFacebook />
                            </button>
                            <button className='text-primary bg-[#E7ECFD] p-2 rounded-full hover:bg-primary hover:text-white duration-200'>
                                <FaTwitter />
                            </button>
                            <button className='text-primary bg-[#E7ECFD] p-2 rounded-full hover:bg-primary hover:text-white duration-200'>
                                <FaLinkedin />
                            </button>
                            <button className='text-primary bg-[#E7ECFD] p-2 rounded-full hover:bg-primary hover:text-white duration-200'>
                                <FaPinterest />
                            </button>
                            <button className='text-primary bg-[#E7ECFD] p-2 rounded-full hover:bg-primary hover:text-white duration-200'>
                                <FaYoutube />
                            </button>
                        </div>
                    </div>
                    <div className='p-10'>
                        <h2 className='text-xl font-bold mb-6'>Company</h2>
                        <ul className='space-y-1 text-accent font-semibold'>
                            <Link to={'/'} className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> About Us
                            </Link>
                            <Link to={'/'} className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> Services
                            </Link>
                            <Link to={'/faq'} className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> FAQ
                            </Link>
                            <Link to={'/'} className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> Blog Standard
                            </Link>
                            <Link to={'/'} className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> Contact Us
                            </Link>
                        </ul>
                    </div>
                    <div className='p-10'>
                        <h2 className='text-xl font-bold mb-6 duration-300'>Solutions</h2>
                        <ul className='space-y-1 text-accent font-semibold'>
                            <li className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> Advance Analytic
                            </li>
                            <li className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> Business Services
                            </li>
                            <li className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> Consulting Services
                            </li>
                            <li className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> Consumer Product
                            </li>
                            <li className='hover:text-primary flex items-center'>
                                <BsDot className='text-3xl text-primary' /> Financial Services
                            </li>
                        </ul>
                    </div>
                    <div className='rounded-xl p-9 h-[270px] flex items-center'
                        style={{ backgroundImage: 'linear-gradient(60deg, #EEF3FC 0%, #F0F0FF 100%)' }}
                    >
                        <div className='space-y-4'>
                            <h2 className='text-xl text-secondary font-bold'>Newsletter</h2>
                            <p className='text-[12px] font-semibold text-accent'>You will get weekly update on Email</p>
                            <input type="email" className='h-12 pl-5 rounded-xl w-[270px] lg:w-[210px] border-[#3A3A3A26] border-[1px] ' placeholder='Email'
                                style={{ backgroundImage: 'linear-gradient(60deg, #EEF3FC 0%, #F0F0FF 100%)' }}
                            />
                            <button className='bg-primary hover:bg-white hover:text-primary duration-300 px-4 py-2 rounded-xl text-white font-bold block'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;