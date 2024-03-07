import React from 'react';
import Image from 'next/image';

function CommonSmallCard({ name, symbol, sparkline, price, price_change }) {

  const priceChangeColor = price_change >= 0 ? 'rounded-sm bg-[#EBF9F4] text-[#14B079]' : 'rounded-sm bg-[#FEEFEE] text-[#E02424]';
  const arrowIcon = price_change >= 0 ? '+' : '-';

  return (
    <div className='flex-shrink-0 w-[18em] p-6 rounded-xl border-[1px] border-[#e4e4e4] space-y-3 hover:cursor-pointer'>
      <div className='flex flex-row items-center gap-2'>
        <Image src={symbol} alt={name} width={1000} height={1000} className='w-6 h-6 rounded-full' />
        <h2 className='text-black font-semibold'>{name}</h2>
        <div className='flex items-center'>
          <p className={`text-black ${priceChangeColor}`}><span className='text-sm ml-1'>{arrowIcon} {Math.abs(price_change)}%</span></p>
        </div>
      </div>
      <p className="text-black font-bold">$ {price}</p>
      <div className='mt-2'>
        <img src={sparkline} alt='Price Graph' className='w-full h-20' />
      </div>
    </div>
  );
}

export default CommonSmallCard;
