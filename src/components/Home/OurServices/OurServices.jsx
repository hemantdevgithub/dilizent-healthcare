import React from 'react';
import ServiceBox from './ServiceBox';
import { Link } from 'react-router-dom';
import { solutions } from '../../../constants/solutions';
import Container from '../../Container/Container';

const OurServices = () => {

    return (
        <div className=' py-14 bg-gray-200'>
            <Container>
                <div className='space-y-10'>
                    <h2 className='text-5xl font-bold text-primary text-center'>Our Solutions</h2>
                    <div className='flex justify-center items-center'>
                        <div className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 w-full'>
                            {
                                solutions.map(service => <ServiceBox key={service.id} service={service} />)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurServices;