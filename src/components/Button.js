import React from 'react';


const Button = (props)=>{

    return (
        <button
        className={`flex justify-between ${props.fullWidth && 'w-full'}
        items-center vertical-middle gap-2 bg-coral-red
        text-white border-coral-red rounded-[0.5rem]
        px-5 py-2 mt-5 hover:font-bold ring-1 active:ring-gray-400 shadow-xl`}
        >{props.label}
        {props.iconURL && <img src={props.iconURL} alt={props.label}
        className='rounded-full mt-2' />}
        </button>
    )
};

export default Button;