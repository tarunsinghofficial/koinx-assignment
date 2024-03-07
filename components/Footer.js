'use client'
import React, { useState, useEffect } from 'react';
import CommonSmallCard from './CommonSmallCard';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../app/globals.css"

function Footer() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [rowId1, setRowId1] = useState(1);
  const [rowId2, setRowId2] = useState(2);

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/search/trending'
      );
      const data = await response.json();
      console.log("Data current trending", data);
      const trending = data.coins.slice(0, 10);
      setTrendingCoins(trending);
    } catch (error) {
      console.error('Error fetching trending coins:', error);
    }
  };

  const scrollLeft = (id) => {
    let scroll = document.getElementById("slider" + id);
    scroll.scrollLeft -= 500;
  };

  const scrollRight = (id) => {
    let scroll = document.getElementById("slider" + id);
    scroll.scrollLeft += 500;
  };

  return (
    <div className='w-full bg-white h-auto p-10 space-y-6 mt-20'>
      <div className='container mx-auto space-y-6'>
        <div className='space-y-6'>
          <h2 className="text-2xl text-black font-bold">You May Also Like</h2>
          <div className="relative flex items-center group">
            <MdChevronLeft
              onClick={() => scrollLeft(rowId1)}
              size={40}
              className="hidden group-hover:block bg-white shadow-lg text-black rounded-full absolute left-0 top-[40%] -translate-y-[40%] opacity-50 hover:opacity-100 cursor-pointer z-10"
            />
            <div id={"slider" + rowId1} className="flex flex-row overflow-x-auto scroll-hide gap-3">
              {trendingCoins.map((coin, index) => (
                <CommonSmallCard
                  key={index}
                  name={coin.item.symbol}
                  price={coin.item.data.price}
                  price_change={coin.item.data.price_change_percentage_24h.usd.toFixed(2)}
                  symbol={coin.item.small}
                  sparkline={coin.item.data.sparkline}
                />
              ))}
            </div>
            <MdChevronRight
              onClick={() => scrollRight(rowId1)}
              size={40}
              className="hidden group-hover:block bg-white shadow-lg transition-transform ease-in-out duration-300 text-black rounded-full absolute top-[40%] -translate-y-[30%] right-0 opacity-50 hover:opacity-100 cursor-pointer z-10"
            />
          </div>
        </div>
        <div className='space-y-6'>
          <h2 className="text-2xl text-black font-bold">Trending Coins</h2>
          <div className="relative flex items-center group">
            <MdChevronLeft
              onClick={() => scrollLeft(rowId2)}
              size={40}
              className="hidden group-hover:block bg-white shadow-lg text-black rounded-full absolute left-0 top-[40%] -translate-y-[30%] opacity-50 hover:opacity-100 cursor-pointer z-10"
            />
            <div id={"slider" + rowId2} className="flex flex-row overflow-x-auto scroll-hide gap-3">
              {trendingCoins.map((coin, index) => (
                <CommonSmallCard
                  key={index}
                  name={coin.item.symbol}
                  price={coin.item.data.price}
                  price_change={coin.item.data.price_change_percentage_24h.usd.toFixed(2)}
                  symbol={coin.item.small}
                  sparkline={coin.item.data.sparkline}
                />
              ))}
            </div>
            <MdChevronRight
              onClick={() => scrollRight(rowId2)}
              size={40}
              className="hidden group-hover:block bg-white shadow-lg transition-transform ease-in-out duration-300 text-black rounded-full absolute top-[40%] -translate-y-[30%] right-0 opacity-50 hover:opacity-100 cursor-pointer z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
