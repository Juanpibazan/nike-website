import React, {useState} from 'react';

import { star } from '../assets/icons';

const PopularProduct = ({product})=>{

    let starArray = [];
    for (let i = 0; i < product.rating; i++) {
            starArray.push(<img
                src={star}
                />)
        }

    return (
        <div>
            <div className='shadow-sm'>
                <img
                src={product.imgURL}
                alt={product.name}
                className='object-contain w-[280px] h-[280px]'
                />
            </div>
            <div className='mt-8 flex justify-start items-center vertical-middle gap-2.5 max-sm:gap-10'>
                <span className='font-palanquin font-bold text-gray-500'>({product.rating})</span>
                {starArray.map((star)=>(
                    <div>
                        {star}
                    </div>
                ))}   
            </div>
            <h3 className='text-[20px] font-bold font-palanquin leading-normal'>{product.name}</h3>
            <h4 className='text-[15px] font-semibold text-coral-red'>{product.price}</h4>
        </div>
    )
};

export default PopularProduct;