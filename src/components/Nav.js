import React from 'react';

import { navLinks } from '../constants';

import headerLogo from '../assets/images/header-logo.svg';
import hamburgerIcon from '../assets/icons/hamburger.svg';

const Nav = ()=>{
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center align-middle max-container'>
                <a href='/'>
                    <img src={headerLogo}
                    alt='Logo'
                    width={130}
                    height={29}
                />
                </a>
                <ul className='flex-1 flex justify-center items-center vertical-middle max-sm:hidden'>
                    {navLinks.map((link)=>{
                        return (
                            <li key={link.href} className='sm:px-5 md:px-8 lg:px-15'>
                                <a href={link.href}
                                className='font-montserrat leading-normal text-md text-slate-gray'
                                >{link.label}</a>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <img src={hamburgerIcon}
                    alt='Mobile Menu Icon'
                    width={25}
                    height={25}
                    className='sm:hidden cursor-pointer'
                    />
                </div>
            </nav>
            <div>

            </div>
        </header>
    )
};

export default Nav;