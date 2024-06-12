import React from 'react';

import { footerLinks, socialMedia } from '../constants';
import { footerLogo } from '../assets/images';

const Footer = ()=>{

    return (
        <footer
        id='contact-us'
        className='max-container bg-black'
        >
            <div className='flex justify-between items-start gap-20
            flex-wrap max-lg:flex-col'>
                <div className='flex flex-col justify-start'>
                    <div>
                        <img
                        src={footerLogo}
                        alt='nike logo'
                        width={150}
                        height={100}
                        />
                    </div>
                    <p className='max-lg:w-[50%] mt-5 text-white flex justify-start flex-wrap'>Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards.</p>
                    <div className='flex justify-start items-center gap-4'>
                        {socialMedia.map((social)=>(
                            <div key={social.alt}
                            className='bg-white rounded-full w-11 h-11 flex justify-center items-center mt-7 cursor-pointer'
                            >
                                <img 
                                src={social.src}
                                />
                            </div>
                        ))}

                    </div>

                </div>
                <div className='flex justify-evenly items-start gap-4 lg:w-full'>
                    <div className='flex flex-col justify-start items-start'>
                        <h3 className='text-white text-3xl font-semibold'>Products</h3>
                        <ul className='list-none'>
                            {footerLinks[0].links.map((link)=>(
                                <li key={link.name}
                                className='mt-3'>
                                    <a href={link.link}
                                    className=' text-slate-gray font-palanquin decoration-none'
                                    >{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <h3 className='text-white text-3xl font-semibold'>Help</h3>
                        <ul className='list-none'>
                            {footerLinks[1].links.map((link)=>(
                                <li key={link.name}
                                className='mt-3'>
                                    <a href={link.link}
                                    className=' text-slate-gray font-palanquin decoration-none'
                                    >{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <h3 className='text-white text-3xl font-semibold'>Get in  touch</h3>
                        <ul className='list-none'>
                            {footerLinks[2].links.map((link)=>(
                                <li key={link.name}
                                className='mt-3'>
                                    <a href={link.link}
                                    className=' text-slate-gray font-palanquin decoration-none'
                                    >{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;