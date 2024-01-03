import React from 'react';
import TopBanner from '../components/TopBanner/TopBanner';
import Container from '../components/Container/Container';
import { solutions } from '../constants/solutions';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Solutions = () => {
    return (
        <div>
            <TopBanner
                heading={'Solutions'}
                img={'/TopBanner/solutions.webp'}
                pageName={'Solutions'}
            />
            <div className='font-poppins py-20 bg-red-100'>
                <Container>
                    <div className='space-y-10'>
                        <div className='space-y-5'>
                            <h1 className='text-primary font-rubik text-3xl'>
                                We help you navigate the complexities of healthcare operations
                            </h1>
                            <h4 className='text-lg '>
                                Contain costs, maintain compliance, engage staff, and elevate care delivery
                            </h4>
                            <p className='text-accent-light'>
                                We are the leader in healthcare governance, risk management, and compliance enterprise operations software and services. Our solutions improve operational efficiency, empower providers, and enable a safer care environment. Explore our provider data management, workforce management, talent management, contracting, spend management, facility access, compliance, quality, and safety solutions to enable your journey to positive outcomes—for patients, providers, staff, and your leadership organization.
                            </p>
                        </div>
                        <div className='space-y-5'>
                            <h2 className='text-3xl font-rubik'>Our Solutions</h2>
                            <p>
                                Value-based care and interoperability are transforming how providers and payers deliver and enable healthcare services. Successfully navigate ongoing change with symplr’s solutions.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                solutions.map(solution => (
                                    <div className='h-[300px] cursor-pointer hover:bg-gray-100 duration-300 flex flex-col justify-between p-8 bg-white'>
                                        <div className='space-y-5'>
                                            <h2 className='text-xl text-primary font-semibold font-rubik'>{solution.name}</h2>
                                            <p className='text-accent'>
                                                {solution.heading}
                                            </p>
                                        </div>
                                        <Link to={`/solutions/${solution.redirect}`}>
                                            <button className='flex items-center gap-3 text-primary'>
                                                Learn More
                                                <FaArrowRight />
                                            </button>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Solutions;