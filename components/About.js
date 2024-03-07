import Image from 'next/image'
import React from 'react'
import btcHolding1 from "../assets/btc1.png"
import btcHolding2 from "../assets/btc2.png"

function About() {
  return (
    <div className='h-auto w-auto lg:w-full bg-white rounded-lg p-6 space-y-4'>
      <h2 className='text-black text-2xl font-bold'>About Bitcoin</h2>
      <div className='space-y-4'>
        <h2 className="text-black text-xl font-bold">What is Bitcoin?</h2>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit et cumque eveniet, ea in cupiditate incidunt deserunt provident a nulla quaerat cum harum dolorem id corporis officiis quidem ipsam suscipit ut doloremque reprehenderit illo consequatur labore? Similique, expedita rerum. Odio cumque, soluta odit voluptatum nesciunt iusto obcaecati eligendi eaque!</p>
        <hr />
        <h2 className="text-black text-xl font-bold">Lorem ipsum dolor sit amet.</h2>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus nobis ipsam sed praesentium odit explicabo repellendus rerum neque, officia natus blanditiis nisi quidem, cumque inventore, suscipit placeat fugit. Eveniet vitae deserunt cum, adipisci iure officiis consequatur molestias voluptatibus vel, maxime animi quisquam voluptatem qui optio, possimus libero necessitatibus ullam.</p>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus nobis ipsam sed praesentium odit explicabo repellendus rerum neque, officia natus blanditiis nisi quidem, cumque inventore, suscipit placeat fugit. Eveniet vitae deserunt cum, adipisci iure officiis consequatur molestias voluptatibus vel, maxime animi quisquam voluptatem qui optio, possimus libero necessitatibus ullam.</p>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus nobis ipsam sed praesentium odit explicabo repellendus rerum neque, officia natus blanditiis nisi quidem, cumque inventore, suscipit placeat fugit. Eveniet vitae deserunt cum, adipisci iure officiis consequatur molestias voluptatibus vel, maxime animi quisquam voluptatem qui optio, possimus libero necessitatibus ullam.</p>
        <hr />
        <div className='space-y-6'>
          <h2 className="text-black text-xl font-bold">Already holding Bitcoin?</h2>
          {/* Images */}
          <div className='flex flex-row items-center justify-center gap-10'>
            <div className='w-full h-auto flex flex-row gap-5 bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] rounded-lg p-4'>
              <Image src={btcHolding1} className='w-auto h-auto rounded-lg' width={500} height={500} alt='btc-holding' />
              <div className='flex flex-col items-start justify-center gap-2'>
                <h2 className="text-white font-bold text-2xl w-40">Calculate your profits</h2>
                <button className='bg-white rounded-lg px-4 py-2 text-black font-semibold'>Check now</button>
              </div>
            </div>
            <div className='w-full h-auto flex flex-row gap-5 bg-gradient-to-r from-[#FF9865] to-[#EF3031] rounded-lg p-4'>
              <Image src={btcHolding2} className='w-auto h-auto rounded-lg' width={500} height={500} alt='btc-holding' />
              <div className='flex flex-col items-start justify-center gap-2'>
                <h2 className="text-white font-bold text-2xl w-56">Calculate your tax liability</h2>
                <button className='bg-white rounded-lg px-4 py-2 text-black font-semibold'>Check now</button>
              </div>
            </div>
          </div>
          <hr />
          <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis iure iusto, totam recusandae aperiam enim facilis facere quidem doloribus, magnam rem dolor vitae earum expedita, consectetur quod dolores natus? Numquam voluptatem, reiciendis placeat ut nisi et provident corporis accusantium dolorum!</p>
        </div>
      </div>
    </div>
  )
}

export default About