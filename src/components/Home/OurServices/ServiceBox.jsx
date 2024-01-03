import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ServiceBox = ({ service }) => {
    return (
        <Link to={`/solutions/${service.redirect}`} state={{ redirect: service.redirect }}>
            <div className='flex justify-between items-center bg-white h-[90px] px-10 group hover:shadow-xl hover:scale-105 duration-300'>
                <h1 className='text-[18px] text-secondary font-semibold'>{service.name}</h1>
                <IoMdArrowDropright className='text-4xl text-primary' />
            </div>
        </Link>
    );
};

export default ServiceBox;