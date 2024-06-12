import React from 'react';

import { products } from '../constants';

import PopularProduct from '../components/PopularProduct';

const PopularProducts = ()=>{

    return (
        <section
        id='products'
        className='max-container max-sm:mt-12'
        >
            <div className='flex flex-col justify-start gap-5'>
                <h2 className='text-4xl font-bold font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h2>
                <p className='text-lg font-bold text-slate-600'>Experience top-notch quaility with our original products.</p>
                <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-15 md:gap-10 max-md:gap-10'>
                {products.map((product)=>(
                    <div key={product.imgURL}>
                        <PopularProduct key={product.imgURL} product={product} />
                    </div>
                ))}
                </div>

            </div>
        </section>
    )
};

export default PopularProducts;