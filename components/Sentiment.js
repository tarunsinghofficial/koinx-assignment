import React from 'react'
import { IoMdInformationCircle } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiNewspaperFill } from "react-icons/pi";
import Image from 'next/image';
import sentimentAnalysis from "../assets/sentimentAnalysis.png"

function Sentiment() {
    return (
        <div className='h-[37rem] w-[40%] lg:w-full bg-white rounded-lg p-6 space-y-3'>
            <h2 className='text-black text-2xl font-bold'>Sentiment</h2>
            <div className='space-y-3'>
                <div className='flex flex-col gap-3'>
                    <div className="flex gap-2 items-center">
                        <h2 className="text-xl font-semibold text-[#44475b]">Key Events</h2>
                        <IoMdInformationCircle className='text-[#7c7e8c]' size={25} />
                    </div>
                    {/* list */}
                    <div className='flex flex-row overflow-x-scroll scroll-hide gap-4'>
                    <div className='flex-shrink-0 bg-[#e8f4fd] flex gap-5 rounded-xl w-auto md:w-[15em] lg:w-[34em] h-[15em] p-4'>
                            <div>
                                <PiNewspaperFill className='bg-[#0082ff] p-2 rounded-full' size={50} />
                            </div>
                            <div className='flex flex-col gap-2 whitespace-normal'>
                                <p className='text-black font-semibold text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corporis.</p>
                                <p className='text-[#536a78] text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus et aut perspiciatis eligendi in id voluptate non tempore inventore facere, omnis neque nostrum hic fuga sed porro, perferendis deserunt totam.</p>
                            </div>
                        </div>
                        <div className='flex-shrink-0 bg-[#ebf9f4] flex gap-5 rounded-xl w-auto md:w-[15em] lg:w-[34em] h-[15em] p-4'>
                            <div>
                                <FaArrowTrendUp className='bg-[#0fba83] p-2 rounded-full' size={50} />
                            </div>
                            <div className='flex flex-col gap-2 w-auto whitespace-normal'>
                                <p className='text-black font-semibold text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corporis.</p>
                                <p className='text-[#536a78] text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus et aut perspiciatis eligendi in id voluptate non tempore inventore facere, omnis neque nostrum hic fuga sed porro, perferendis deserunt totam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-3'>
                <div className="flex gap-2 items-center">
                    <h2 className="text-xl font-semibold text-[#44475b]">Analyst Esimates</h2>
                    <IoMdInformationCircle className='text-[#7c7e8c]' size={25} />
                </div>
                <div>
                    {/* sentiments */}
                    <Image src={sentimentAnalysis} alt="sentimentAnalysis" className='w-auto object-fill' width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
}

export default Sentiment