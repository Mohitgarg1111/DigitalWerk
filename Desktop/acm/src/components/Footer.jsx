import React from 'react'

function Footer() {
    return (
        <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20'>

            <div className='w-1/2 flex flex-col justify-between h-full'>

                <div className='heading'>
                    <h1 className='text-[6vw] font-semibold uppercase leading-none mb-7'>Contact</h1>
                    <h1 className='text-[6vw] font-semibold uppercase leading-none mb-10'>Details :</h1>
                </div>
               
            </div>

            <div className='w-1/2'>

                <div className='dets mt-10'>
                    <a className='block text-xl font-light' href="#">Facebook :</a>
                    <a className='block text-xl font-light' href="#">Twitter :</a>
                    <a className='block text-xl font-light' href="#">Instagram : <span className='mr-2'>@acm_cuiet</span>  @parrave_official</a>
                    <a className='block text-xl font-light' href="#">Whatsapp :</a>
                    <a className='block text-xl font-light' href="#">Snapchat :</a>
                </div>

            </div>

        </div>
    )
}

export default Footer
