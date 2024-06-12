import React from 'react';

import CustomerReviewCard from '../components/CustomerReviewCard';
import { reviews } from '../constants';

const CustomerReviews = ()=>{

    return (
        <section
        id='customer-reviews'
        className='flex flex-col justify-center gap-10 min-h-screen'
        >
            <h2 className='text-center text-4xl font-bold font-palanquin'>What our <span className='text-coral-red'>Customers</span> say?</h2>
            <p className='mt-6 text-center font-semibold text-slate-gray'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            <div className='flex flex-col sm:flex-row justify-center flex-wrap gap-5'>
            {reviews.map((review)=>(
                <CustomerReviewCard key={review.imgURL} {...review} />
            ))}
            </div>

        </section>
    )
};

export default CustomerReviews;