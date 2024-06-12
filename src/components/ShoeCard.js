import React from 'react';


const ShoeCard = (props)=>{

    const handleClick = ()=>{
        if (props.bigShoeImg !== props.imgURL.bigShoe) {
            props.changeBigShoeImage(props.imgURL.bigShoe);
        }
    };

    return (
        <div className={`border-2
            ${props.bigShoeImg===props.imgURL.bigShoe
                ?'border-coral-red'
                : 'border-transparent'
            } rounded-md bg-gray-400 h-[150px] cursor-pointer`}
        onClick={handleClick}
        >
            <div className='flex justify-center items-center'>
                <img 
                src={props.imgURL.thumbnail}
                alt='big shoe image'
                width={150}
                height={110}
                className='object-contain'
            />
            </div>
    </div>
    )
};

export default ShoeCard;