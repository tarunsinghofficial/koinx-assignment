'use client'
import Logo from '../assets/koinx-logo.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div
            className={`relative top-0  w-full bg-white flex flex-row justify-between items-center p-4 z-50 transition-all duration-300 ${scrolling ? 'shadow-md' : ''}`}
        >
            <div className='flex flex-row justify-between items-center gap-10 container mx-auto'>
                <div>
                    <Link href={'/'}>
                        <Image src={Logo} alt="koinx" className="w-auto h-8" width={500} height={500} />
                    </Link>
                </div>
                <div className='hidden lg:flex flex-row items-center gap-10'>
                    <Link href={'/'} className='text-black font-bold'> Crypto Taxes </Link>
                    <Link href={'/'} className='text-black font-bold'> Free Tools </Link>
                    <Link href={'/'} className='text-black font-bold'> Resource Center </Link>
                    <button className="bg-gradient-to-r from-[#276FEA] to-[#1B4AEF] px-4 py-2 text-white rounded-lg">
                            Get Started
                        </button>
                </div>
            </div>
            <div className='flex lg:hidden'>
                <button onClick={toggleMobileMenu} className='text-[#4361ee] focus:outline-none '>
                    {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className='lg:hidden absolute top-full left-0 w-full bg-white flex flex-col justify-center items-center text-black p-4'>
                    <Link href={'/'} className='text-black font-bold'> Crypto Taxes </Link>
                    <Link href={'/'} className='text-black font-bold'> Free Tools </Link>
                    <Link href={'/'} className='text-black font-bold'> Resource Center </Link>
                    <div>
                        <button className="bg-gradient-to-r from-[#276FEA] to-[#1B4AEF] px-4 py-2 text-white rounded-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
