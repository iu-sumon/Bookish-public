import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <header className='flex justify-center md:justify-between items-center sticky md:px-20 md:py-8  bg-[#161E35] py-5 px-5 '>
            <div className='hidden md:block md:text-3xl text-white font-bold font-mono'>
                <Link to='./' >BOOKISH</Link>
            </div>
            <nav className='flex md:gap-4 md:text-xl   font-mono gap-2 md:font-bold'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/review'>REVIEW</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/contact'>CONTACT</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
            </nav>
        </header>
    );
};

export default Header;