import Image from 'next/image'
import React from 'react'
import Logo from "../assets/koinx-logo.png"

function Navbar() {
    return (
        <div className="container-mx-auto">
            <nav className='bg-white flex flex-row justify-between p-6 drop-shadow-sm items-center'>
                <Image src={Logo} alt='koinx' className='w-auto h-8' width={500} height={500} />
                <div className='flex flex-row items-center justify-between gap-10'>
                    <ul className='list-none text-black font-bold flex flex-row gap-10'>
                        <li>Crypto Taxes</li>
                        <li>Free Tools</li>
                        <li>Resource Center</li>
                    </ul>
                    <button className='bg-gradient-to-r from-[#276FEA] to-[#1B4AEF] px-4 py-2 text-white rounded-lg'>Get Started</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar