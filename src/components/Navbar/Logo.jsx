import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to={'/'}>
            <div className='flex items-center gap-2 h-full lg:-ml-2'>
                <img src="/logo/logo.png" className='h-[50px] lg:h-[65px] rounded-full' alt="" />
                <h3 className='text-4xl font-rubik font-bold text-primary'>Dilizent.</h3>                
            </div>
        </Link>
    );
};

export default Logo;