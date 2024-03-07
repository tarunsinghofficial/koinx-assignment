import Image from 'next/image'
import React from 'react'
import promo from "../assets/promo.png"

function PromoCard() {
  return (
    <div className='h-auto lg:h-[33rem] w-full bg-[#0052FE] rounded-2xl p-10 lg:-mt-5'>
      <div className='flex flex-col items-center justify-evenly gap-5'>
        <div className='w-full max-w-md text-center space-y-5'>
          <h2 className="text-white text-3xl font-bold">Get Started with KoinX for FREE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas optio, laudantium excepturi tempora rerum atque iure sit sint inventore itaque!</p>
        </div>
        <Image src={promo} className='w-auto lg:w-[12em] h-auto' alt='' width={1000} height={1000} />
        <button className='bg-white w-auto md:w-[10em] lg:w-[20em] h-12 px-4 py-2 text-black font-bold rounded-md'>Get Started for Free</button>
      </div>
    </div>
  )
}

export default PromoCard