'use client'
import React, { useState, useEffect } from 'react';
import TradingViewWidget from './TradingViewWidget';
import Image from 'next/image';
import btc from "../assets/btclogo.png"

function HeroCard() {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    fetchBitcoinData();
  }, []);

  const fetchBitcoinData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
      );
      const data = await response.json();
      setBitcoinData(data.bitcoin);
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
    }
  };

  return (
    <div className='h-[45rem] w-[40%] lg:w-full bg-white rounded-lg p-6'>
      <div className='flex item-center gap-5'>
        <Image src={btc} alt="btc-logo" width={500} height={500} className='w-auto' />
        <span className='bg-[#768396] text-white rounded-lg p-2 flex items-center'>Rank #1</span>
      </div>
      {bitcoinData && (
        <div className='mt-8'>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-6'>
              <p className='text-black text-2xl font-bold' >$ {bitcoinData.usd}</p>
              <div className='flex flex-row items-center'>
                <div className='px-2 rounded-sm bg-[#EBF9F4] text-[#14B079]'>{bitcoinData.usd_24h_change.toFixed(2)}%
                </div>
                <p className='text-[#cbd0d8]'>(24h)</p>
              </div>
            </div>
            <p className='text-black font-bold' >₹ {bitcoinData.inr}</p>
          </div>
          <hr className='my-6' />
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <p className='text-black font-semibold'>Bitcoin Price Chart (USD)</p>
            <div className='flex flex-row gap-2'>
              <span className='text-sm  font-semibold hover:cursor-pointer hover:bg-[#e2ecfe] hover:text-[#0052FE] text-[#14b079] rounded-lg p-1'>1H</span>
              <span className='text-sm  font-semibold hover:cursor-pointer hover:bg-[#e2ecfe] hover:text-[#0052FE] text-[#14b079] rounded-lg p-1'>1D</span>
              <span className='text-sm  font-semibold hover:cursor-pointer hover:bg-[#e2ecfe] hover:text-[#0052FE] text-[#14b079] rounded-lg p-1'>7D</span>
              <span className='text-sm  font-semibold hover:cursor-pointer hover:bg-[#e2ecfe] hover:text-[#0052FE] text-[#14b079] rounded-lg p-1'>1M</span>
              <span className='text-sm  font-semibold hover:cursor-pointer hover:bg-[#e2ecfe] hover:text-[#0052FE] text-[#14b079] rounded-lg p-1'>3M</span>
              <span className='text-sm  font-semibold hover:cursor-pointer hover:bg-[#e2ecfe] hover:text-[#0052FE] text-[#14b079] rounded-lg p-1'>6M</span>
              <span className='text-sm  font-semibold hover:cursor-pointer hover:bg-[#e2ecfe] hover:text-[#0052FE] text-[#14b079] rounded-lg p-1'>1Y</span>
              <span className='text-sm  font-semibold hover:cursor-pointer hover:bg-[#e2ecfe] hover:text-[#0052FE] text-[#14b079] rounded-lg p-1'>ALL</span>
            </div>
          </div>
          <div className="mt-4">
            <TradingViewWidget />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroCard;
