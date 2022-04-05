import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='md:mr-20'>

            <div onClick={() => setOpen(!open)} className='w-10 h-10 md:hidden text-white'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div className={`md:flex justify-center absolute md:static md:gap-4 w-full bg-[#161E35] font-mono ${open ? 'top-14 right-0' : 'top-[-120px]'}`}>

                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/review'>REVIEW</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/contact'>CONTACT</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>

            </div>


        </nav>
    );
};

export default Navbar;