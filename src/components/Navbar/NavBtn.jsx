import React from 'react';
import { Link } from 'react-router-dom';

const NavBtn = () => {
    return (
        <Link
            to={'/contact'}
        >
            <button
                className='bg-primary font-semibold text-sm uppercase text-white font-poppins px-5 py-2 rounded-md'>
                Schedule Meeting
            </button>
        </Link>
    );
};

export default NavBtn;