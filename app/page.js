'use client'
import * as React from 'react'
import About from "@/components/About";
import HeroCard from "@/components/HeroCard";
import PerformanceCard from "@/components/PerformanceCard";
import PromoCard from "@/components/PromoCard";
import TrendingCoinCard from "@/components/TrendingCoinCard";
import TokenomicsCard from "@/components/TokenomicsCard";
import Sentiment from "@/components/Sentiment";

//MUI imports
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TeamCard from '@/components/TeamCard';

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container mx-auto p-5 lg:p-none">
      <div className='flex gap-1 items-center my-3'>
        <p className="text-black">Cryptocurrencies </p>
        <MdOutlineKeyboardDoubleArrowRight size={23} className='text-black' />
        <span className='font-semibold text-black'>Bitcoin</span>
      </div>
      <div className="grid grid-row-12 lg:grid-cols-12 gap-6">
        <div className="row-span-8 lg:col-span-8 h-full w-full space-y-6">
          <HeroCard />
          <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="mui-tabs">
                <Tab label="Overview" />
                <Tab label="Fundamentals" />
                <Tab label="News Insights" />
                <Tab label="Sentiments" />
                <Tab label="Team" />
                <Tab label="Technicals" />
                <Tab label="Tokenomics" />
              </Tabs>
            </Box>
          </div>
          <PerformanceCard />
          <Sentiment />
          <About />
          <TokenomicsCard />
          <TeamCard />
        </div>
        <div className="row-span-4 lg:col-span-4 h-full w-full space-y-6">
          <PromoCard />
          <TrendingCoinCard />
        </div>
      </div>
    </div>

  );
}
