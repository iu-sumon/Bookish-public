import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <header className='flex justify-center md:justify-between items-center sticky px-20 py-8 text-2xl font-bold font-mono bg-[#161E35]'>
        <div className='hidden md:block text-3xl text-white'>
            <Link to='./' >BOOKISH</Link>
        </div>
        <nav className='flex gap-4 text-xl font-mono'>
            <CustomLink to='/'>HOME</CustomLink>
            <CustomLink to='/review'>REVIEW</CustomLink>
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink to='/contact'>CONTACT</CustomLink>
            <CustomLink to='/about'>ABOUT</CustomLink>
        </nav>
    </header>
    );
};

export default Header;