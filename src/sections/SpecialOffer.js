import React from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';

const SpecialOffer = ()=>{
    return (
        <section
        id='special-offer'
        className='w-full flex flex-col sm:flex-row justify-between items-start gap-10 min-h-screen'
        >
            <div className='sm:w-full'>
                <h2 className='font-palanquin font-bold text-4xl'><span className='text-coral-red'>Special</span> Offer</h2>
                <p className='mt-7 leading-normal font-palanquin text-slate-gray'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className='mt-7 leading-normal font-palanquin text-slate-gray'>Navigate a realm of possibilities to fulfill desires, surpassing expectations. Your journey with us is nothing far from expectional.</p>
                <div className='flex justify-start items-start gap-7'>
                <div className='flex justify-start items-center gap-7'>
                    <Button label='Shop now' iconURL={arrowRight}/>
                    <button className='flex justify-between items-center vertical-middle gap-2 text-slate-gray border-slate-gray border-2 rounded-[0.5rem] px-5 py-2 mt-5
                    hover:font-bold ring-1 active:ring-gray-400
                    shadow-xl'>
                        Learn more
                    </button>
                </div>
            </div>
            </div>

            <div className='flex justify-center items-center'>
                <img
                src={offer}
                alt='offer'
                className='object-contain w-full max-lg:h-[400px]'
                />
            </div>
        </section>
    )
};

export default SpecialOffer;