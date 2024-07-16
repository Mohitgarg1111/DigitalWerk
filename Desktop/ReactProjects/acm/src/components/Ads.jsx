import React from 'react'
import main2Img from '../assets/main.png'
import mainImg from '../assets/main2.jpg'

function About() {
    return (
        <div className='w-full p-20 bg-[#d71230] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[4.5vw] leading-[4.5vw] tracking-tight'>
                We Provide Great Advertisement Oppurtunities <br /> For Displaying On Our Machines
            </h1>

            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#090c00]'>
                <div className='w-1/2'>

                    <h1 className='text-7xl'>Our avc</h1>
                    <p className='text-3xl mt-5'>- 24*7 Support</p>
                    <p className='text-3xl'>- Customized Advertisements</p>
                    <p className='text-3xl'>- Great Deals / Offers</p>
                    <button className='flex uppercase gap-10 items-center px-9 py-5 bg-zinc-900 mt-10 rounded-full text-white'>
                        Book Now
                        <div className='w-3 h-3 rounded-full bg-zinc-100'></div>
                    </button>

                </div>

                <div className='w-1/2 h-[65vh] rounded-3xl '>
                    <p className='w-full'>
                        <img src={main2Img} alt="" className=' h-[65vh] w-[30vw]' />
                    </p>
                </div>
            </div>


            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#090c00]'>

                <div className='w-1/2 h-[65vh] rounded-3xl '>
                    <p className='w-full'>
                        <img src={mainImg} alt="" className=' h-[65vh] w-[30vw]' />
                    </p>
                </div>

                <div className='w-1/2'>

                    <h1 className='text-7xl'>Features</h1>
                    <p className='text-3xl mt-5'>- All time delivery</p>
                    <p className='text-3xl'>- Variety Options</p>
                    <p className='text-3xl'>- Cold Drinks</p>
                    <button className='flex uppercase gap-10 items-center px-9 py-5 bg-zinc-900 mt-10 rounded-full text-white'>
                        Book Now
                        <div className='w-3 h-3 rounded-full bg-zinc-100'></div>
                    </button>

                </div>


            </div>
        </div>
    )
}

export default About
