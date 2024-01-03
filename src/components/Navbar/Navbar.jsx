import React, { useCallback, useState } from 'react';
import Container from '../Container/Container';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import NavIcons from './NavIcons';
import MiniMenu from './MiniMenu';
import Navigation from './Navigation';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    return (
        <header className='h-[90px] top-0 z-[999] w-full relative bg-white border shadow-sm py-4'>
            <Container>
                <div className=' flex items-center justify-between rounded-full w-full h-full'>
                    <Logo />
                    <div className='flex items-center gap-10'>
                        <Navigation />
                        <NavIcons handleOpen={handleClick} isOpen={isOpen} />
                    </div>
                </div>
            </Container>
            <MiniMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        </header>
    );
};

export default Navbar;