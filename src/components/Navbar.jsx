"use client"
import { BiHomeAlt,BiBriefcase } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { VscServerProcess } from 'react-icons/vsc';
import { useState } from 'react';


const Navbar = () => {
    const [activeNav,setActiveNav] = useState('#')
    return (
        <nav className='nav-bg'>
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt></BiHomeAlt></a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser></AiOutlineUser></a>
            <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBriefcase></BiBriefcase></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><VscServerProcess /></a>
        </nav>
    );
};

export default Navbar;