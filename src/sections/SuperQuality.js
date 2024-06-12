import React from 'react';

import Button from '../components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = ()=>{
    return (
        <section
        id='about-us'
        className='flex w-full lg:flex-row flex-col justify-between items-center min-h-screen gap-10'
        >
            <div className='relative xl:w-2/5 w-full flex flex-1 flex-col justify-center items-start'>
                <h2 className='text-4xl font-bold'>We bring you <span className='text-coral-red'>Super Quality</span> Shoes</h2>
                <p className='mt-5 info-text object-contain'>Ensuring premium comfort and style, our meticulously cfrated footwear is designed to elevate your experience.
                    <br/>
                    <br/>
                    Our dedication to detail and excellence ensures your satisfaction.
                </p>
                <Button label='View Details' />
                
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <img 
                src={shoe8}
                alt='super quality shoe'
                className='max-lg:w-[300px] max-lg:h-[300px]'
                />
            </div>
        </section>
    )
};

export default SuperQuality;