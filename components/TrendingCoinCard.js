import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function TrendingCoinCard() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/search/trending'
      );
      const data = await response.json();
      console.log(data);
      const top3TrendingCoins = data.coins.slice(0, 3);
      setTrendingCoins(top3TrendingCoins);
    } catch (error) {
      console.error('Error fetching trending coins:', error);
    }
  };

  return (
    <div className='h-[14rem] w-[40%] lg:w-auto bg-white rounded-lg p-6'>
      <h2 className='text-black text-2xl font-bold'>Trending Coins (24h)</h2>
      <div>
        {trendingCoins.map((coin, index) => (
          <div key={index} className='flex flex-row justify-between items-center space-y-6'>
            <div className='flex flex-row items-center gap-3'>
              <Image src={coin.item.small} alt={coin.item.name} width={100} height={100} className='w-6 h-6 rounded-full' />
              <p className='text-black font-semibold'>{coin.item.name} ({coin.item.symbol})</p>
            </div>
            <div className='px-2 rounded-sm bg-[#EBF9F4] text-[#14B079]'> {coin.item.data.price_change_percentage_24h.usd.toFixed(2)} %
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCoinCard;
