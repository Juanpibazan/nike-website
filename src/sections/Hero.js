import React, {useState} from 'react';

import Button from '../components/Button'; 
import ShoeCard from '../components/ShoeCard';
import {arrowRight} from '../assets/icons';
import bigShoe1 from '../assets/images/big-shoe1.png'; 
import { statistics, shoes } from '../constants';

const Hero = ()=>{
    const [selectedImg, setSelectedImg] = useState(shoes[0].bigShoe);

    return (
        <section
        id='home'
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
        <div className='relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28'>
            <p className='text-coral-red text-xl padding-y'>Our Summer Collections</p>
            <h1 className='text-[80px] font-montserrat font-bold'>The New Arrival <span className='text-coral-red'>Nike</span> Shoes</h1>
            <p>Discover stylish Nike arrivals, quality comfort and innovation for your active life</p>
            <Button label='Shop Now' iconURL={arrowRight} />
            <div className='flex justify-start items-start gap-16 flex-wrap mt-20 w-full'>
                {statistics.map((stat)=>(
                <div key={stat.label}>
                    <p className='text-2xl font-bold font-palanquin'>{stat.value}</p>
                    <p className='leading-7 text-xl'>{stat.label}</p>
                </div>
                ))}
                
            </div>
        </div>
        <div className='relative
        flex-1 flex justify-center
        items-center vertical-middle
        leading-[100%] xl:min-h-screen max-xl:py-40
        bg-pale-blue bg-center bg-cover'>
            <img
             src={selectedImg}
             alt='shoe collection'
             width={400}
             height={500}
             className='object-contain relative z-10'
             />
             <div  className='flex justify-around items-end absolute bottom-0 sm:gap-10 max-sm:gap-2'>
                {shoes.map((shoe, index)=>(
                    <div key={index}>
                        <ShoeCard 
                        imgURL={shoe}
                        changeBigShoeImage={(img)=>{setSelectedImg(img)}}
                        bigShoeImg={selectedImg}
                        />
                    </div>

                ))}
             </div>
        </div>
        </section>
    )
};


export default Hero;