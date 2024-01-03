import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to={'/'}>
            <div className='flex items-center gap-2 h-full lg:-ml-2'>
                <img src="/logo/logo.png" className='h-[30px] lg:h-[65px] rounded-full' alt="" />
                
            </div>
        </Link>
    );
};

export default Logo;