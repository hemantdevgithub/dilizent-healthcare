import React from 'react';
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import NavBtn from './NavBtn';
const NavIcons = ({ isOpen, handleOpen }) => {
    return (
        <>
            <div
                className="lg:hidden inline-block
        "
            >
                <Hamburger
                    toggled={isOpen}
                    toggle={handleOpen}
                    color='#1370b5'
                    rounded
                    size={28}
                />
            </div>
            <div
                className='lg:inline-block hidden
      '
            >
                <NavBtn />
            </div>
        </>)
};

export default NavIcons;