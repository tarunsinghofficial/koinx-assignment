import React from 'react'
import { IoMdInformationCircle } from "react-icons/io";

function Sentiment() {
    return (
        <div className='h-[37rem] w-auto lg:w-full bg-white rounded-lg p-6'>
            <h2 className='text-black text-2xl font-bold'>Sentiment</h2>
            <div>
                <div className="flex gap-2 items-center">
                    <h2 className="text-xl font-semibold text-[#44475b]">Key Events</h2>
                    <IoMdInformationCircle className='text-[#7c7e8c]' size={25} />
                </div>
                <div>
                    {/* list */}
                </div>
            </div>
            <div>
                <div className="flex gap-2 items-center">
                    <h2 className="text-xl font-semibold text-[#44475b]">Analyst Esimates</h2>
                    <IoMdInformationCircle className='text-[#7c7e8c]' size={25} />
                </div>
                <div>
                    {/* sentiments */}
                </div>
            </div>
        </div>
    )
}

export default Sentiment