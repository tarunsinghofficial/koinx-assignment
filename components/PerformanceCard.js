import React from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import FundamentalsCard from './FundamentalsCard'
import { Slider } from '@mui/material'

const fundamentalData = [
  {
    title1: "Bitcoin Price",
    price1: "16,815.46",
    title2: "Market Cap",
    price2: "323,523,290,047",
  },
  {
    title1: "24d Low / 24d High",
    price1: "16,815.46 / 16,805.42",
    title2: "Market Cap Dominance",
    price2: "33.3534%",
  },
  {
    title1: "7d Low / 7d High",
    price1: "16,815.46 / 16,805.42",
    title2: "Volume / Market Cap",
    price2: "0.0232",
  },
  {
    title1: "Trading Volume",
    price1: "323,523,290,047",
    title2: "All-Time High",
    price2: "323,523,290,047",
  },
  {
    title1: "Market Cap Rank",
    price1: "#1",
    title2: "All-Time Low",
    price2: "323,523,290,047",
  },
]

function PerformanceCard() {
  return (
    <div className='h-auto w-full bg-white rounded-lg p-6 flex flex-col gap-10'>
      <h2 className='text-black text-2xl font-bold'>Performance</h2>
      <div className='space-y-10'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-row gap-5'>
            <span>
              <p className='text-[#768396]'>Today's Low</p>
              <p className='text-[#000000]'>46,300.22</p>
            </span>
            <Slider />
            <span>
              <p className='text-[#768396]'>Today's High</p>
              <p className='text-[#000000]'>46,930.22</p>
            </span>
          </div>
          <div className='flex flex-row gap-5'>
            <span>
              <p className='text-[#768396]'>52W Low</p>
              <p className='text-[#000000]'>16,930.22</p>
            </span>
            <Slider />
            <span>
              <p className='text-[#768396]'>52W Low</p>
              <p className='text-[#000000]'>46,930.22</p>
            </span>
          </div>
        </div>
        <div className='space-y-5'>
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-semibold text-[#44475b]">Fundamentals</h2>
            <IoMdInformationCircle className='text-[#7c7e8c]' size={25} />
          </div>
          <div>
            {fundamentalData.map((data, idx) => (
              <FundamentalsCard key={idx} title1={data.title1} title2={data.title2} price1={data.price1} price2={data.price2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceCard