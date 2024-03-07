import React from 'react'
import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"
import Image from 'next/image'

function TeamCard() {
    return (
        <div className='h-auto w-full bg-white rounded-lg p-6 space-y-4'>
            <h2 className='text-black text-2xl font-bold'>Team</h2>
            <div className='space-y-4'>
                <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae et optio dolorum officia deserunt commodi eaque unde perspiciatis quae!</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col lg:flex-row gap-5 rounded-lg bg-[#e8f4fd] p-4 items-center'>
                        <div className='flex flex-col gap-1 w-[30em] items-center'>
                            <Image src={team1} className='w-auto rounded-lg' alt="team" width={500} height={500} />
                            <h3 className="text-lg font-bold text-black">John Smith</h3>
                            <p className="text-sm text-gray-400">Designation here</p>
                        </div>
                        <div>
                            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam libero nesciunt nemo ea! Similique et quibusdam quaerat. Voluptatibus atque eveniet reiciendis labore dolor fugit nulla ea? Nulla perspiciatis debitis nostrum delectus in esse inventore asperiores soluta laudantium nisi aliquam expedita ad dolore cumque eius, sequi atque ut quis ea quasi temporibus voluptatum? Voluptate incidunt rem a, voluptatum natus autem.</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 rounded-lg bg-[#e8f4fd] p-4 items-center'>
                        <div className='flex flex-col gap-1 w-[30em] items-center'>
                            <Image src={team2} className='w-auto rounded-lg' alt="team" width={500} height={500} />
                            <h3 className="text-lg font-bold text-black text-center">Elina Williams</h3>
                            <p className="text-sm text-gray-400">Designation here</p>
                        </div>
                        <div>
                            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam libero nesciunt nemo ea! Similique et quibusdam quaerat. Voluptatibus atque eveniet reiciendis labore dolor fugit nulla ea? Nulla perspiciatis debitis nostrum delectus in esse inventore asperiores soluta laudantium nisi aliquam expedita ad dolore cumque eius, sequi atque ut quis ea quasi temporibus voluptatum? Voluptate incidunt rem a, voluptatum natus autem.</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 rounded-lg bg-[#e8f4fd] p-4 items-center'>
                        <div className='flex flex-col gap-1 w-[30em] items-center'>
                            <Image src={team3} className='w-auto rounded-lg' alt="team" width={500} height={500} />
                            <h3 className="text-lg font-bold text-black">John Smith</h3>
                            <p className="text-sm text-gray-400">Designation here</p>
                        </div>
                        <div>
                            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam libero nesciunt nemo ea! Similique et quibusdam quaerat. Voluptatibus atque eveniet reiciendis labore dolor fugit nulla ea? Nulla perspiciatis debitis nostrum delectus in esse inventore asperiores soluta laudantium nisi aliquam expedita ad dolore cumque eius, sequi atque ut quis ea quasi temporibus voluptatum? Voluptate incidunt rem a, voluptatum natus autem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard