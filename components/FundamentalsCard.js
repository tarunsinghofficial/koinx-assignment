import React from 'react';

function FundamentalsCard({ title1, title2, price1, price2 }) {
    return (
        <div className='flex flex-col lg:flex-row justify-between text-lg gap-5 lg:gap-20'>
            <ul className='w-full lg:w-[50%] space-y-4'>
                <li className='flex flex-row items-center justify-between gap-4 lg:gap-20'>
                    <p className='text-[#768396] text-base lg:text-lg'>{title1}</p>
                    <p className='text-black text-base lg:text-lg'>$ {price1}</p>
                </li>
                <hr />
            </ul>
            <ul className='w-full lg:w-[50%] space-y-4'>
                <li className='flex flex-row items-center justify-between gap-4 lg:gap-20'>
                    <p className='text-[#768396] text-base lg:text-lg'>{title2}</p>
                    <p className='text-black text-base lg:text-lg'>$ {price2}</p>
                </li>
                <hr />
            </ul>
        </div>
    );
}

export default FundamentalsCard;
