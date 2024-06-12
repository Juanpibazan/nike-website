import React from 'react';

import { star } from '../assets/icons';

const CustomerReviewCard = ({imgURL,customerName, rating, feedback})=>{

    return (
        <div className='w-full flex flex-1 flex-col justify-center gap-5 px-10 py-16'>
            <div className='rounded-full flex justify-center'>
                <img 
                src={imgURL}
                alt={customerName}
                width={100}
                height={100}
                className='rounded-full w-50 h-50'
                />
            </div>
            <p className='leading-normal font-palanquin text-slate-gray text-center mt-5'>{feedback}</p>
            <div className='flex justify-center items-center gap-2'>
                <img
                        src={star}
                        className='text-coral-red'
                />
                <p className='text-slate-gray font-semibold'>({rating})</p>
            </div>
            <h3 className='font-bold text-slate-gray text-2xl text-center'>{customerName}</h3>

        </div>
    )
};

export default CustomerReviewCard;