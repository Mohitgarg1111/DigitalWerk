import { motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import smart1 from '../assets/smart1.jpg'
import smart2 from '../assets/smart2.png'
import b1 from '../assets/1.webp'
import b2 from '../assets/2.webp'
import b3 from '../assets/3.webp'
import b4 from '../assets/4.webp'

function Featured() {

    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[2px] border-white pb-20'>
                <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight text-center '>
                    Smart Snacking
                </h1>

                <div className='h-12'>
                  <p className='flex gap-14 ml-50'>
                  <img src={b1} alt=""/>
                    <img src={b2} alt="" />
                    <img src={b3} alt="" />
                    <img src={b4} alt="" />
                    <img src={b1} alt=""/>
                    <img src={b2} alt="" />
                  </p>
                </div>

            </div>
            <div className='px-20'>

                <div className='cards w-full flex gap-10 mt-10'>
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className='cardcontainer relative w-1/2 h-[70vh]'>
                        <h1 className='absolute flex z-[9] text-[#000000] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl overflow-hidden leading-none tracking-tighter'>
                            {"NORMAL".split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [.22, 1, .36, 1], delay: index * 0.02 }}
                                    className='inline-block' >
                                    {item}
                                </motion.span>)}
                        </h1>


                        <div className=' card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src={smart1} alt="" />
                        </div>
                    </motion.div>

                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className='cardcontainer relative w-1/2 h-[70vh]'>
                        <div className=' card w-full h-full rounded-xl overflow-hidden'>

                            <h1 className='absolute flex overflow-hidden z-[9] text-[#000000] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl leading-none tracking-tighter'>
                                {"PREMIUM".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [.22, 1, .36, 1], delay: index * 0.02 }}
                                        className='inline-block' >
                                        {item}
                                    </motion.span>)}
                            </h1>

                            <img className='w-full h-full bg-cover' src={smart2} alt="" />
                        </div>
                    </motion.div>

                </div>
            </div>

        </div >
    )
}

export default Featured


