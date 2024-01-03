import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ServiceBox = ({ service }) => {
    const { heading, subHeading, id } = service || {}
    return (
        <Link to={"/service-details"} state={{ id: id }}>
            <div className='flex justify-between items-center bg-white h-[90px] px-10 group hover:shadow-xl hover:scale-105 duration-300'>
                <h1 className='text-[18px] text-secondary font-semibold'>{heading}</h1>
                <IoMdArrowDropright className='text-4xl text-primary' />
            </div>
        </Link>
    );
};

export default ServiceBox;