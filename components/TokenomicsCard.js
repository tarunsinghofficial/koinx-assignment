import Image from 'next/image'
import React from 'react'
import tokenomics from "../assets/tokenomics.png"

function TokenomicsCard() {
  return (
    <div className='h-auto w-[40%] lg:w-full bg-white rounded-lg p-6 space-y-4'>
      <h2 className='text-black text-2xl font-bold'>Tokenomics</h2>
      <div className='space-y-4'>
        <h2 className="text-black text-lg font-semibold">Initial Distribution</h2>
        <div className='flex flex-col gap-2 items-start'>
            <Image src={tokenomics} className='w-full md:w-[45em] lg:w-[50em]' alt="tokenomics" width={500} height={500} />
            <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint enim dicta doloremque natus sapiente, iste voluptas perferendis eos quisquam dolore qui necessitatibus, odit vel fuga laudantium, laboriosam suscipit consequatur eaque commodi quae consequuntur? Accusantium asperiores harum quas animi, facere ipsum sapiente vero placeat sed eligendi id, eum incidunt cupiditate aperiam?</p>
        </div>
      </div>
    </div>
  )
}

export default TokenomicsCard