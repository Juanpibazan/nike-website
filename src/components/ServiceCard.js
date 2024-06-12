import React from 'react';


const ServiceCard = ({service})=>{

    return (
        <div className='sm:w-[30%] w-full flex flex-1 flex-col justify-center gap-3 rounded-md shadow-xl px-10 py-16 bg-slate-200'>
            <div className='flex flex-1 flex-row justify-cstart items-center gap-7'>
                <div className='bg-coral-red rounded-full w-11 h-11 flex justify-center items-center'>
                    <img src={service.imgURL} />
                </div>
                <h3 className='text-coral-red'>{service.label}</h3>
            </div>
            <p className='font-palanquin text-slate-gray break-words text-xl leading-normal'>{service.subtext}</p>
        </div>
    )
};

export default ServiceCard;