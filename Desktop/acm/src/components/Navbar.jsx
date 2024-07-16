import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">

            <div className='logo w-12'>
               <img src={logo} alt="" />
            </div>
            
            <div className='links flex gap-10'>
                {["Home","Services","Advertisement","Contact","Login"].map((item,index)=>
                <a key={index} className={`text-lg capitalize font-light ${index===4 && "ml-32"}`}>{item}</a>)}
            </div>

        </div>
    )
}

export default Navbar

