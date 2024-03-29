import React from 'react'

export default function LargeBook2({ imageLink }) {
    return (
        <a href='/product' 
            className="bg-lg-book-2 text-larq font-semibold  overflow-hidden flex flex-col justify-end " >

            {/* <div className='flex flex-col justify-center items-center py-6'>
                <h1 className='text-3xl py-4'>The Lord of the Rings</h1>
                <span className='text-center m-auto'> Starting at $199</span>
            </div> */}
            <div style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent " }} className="w-full p-10"> 
                <div>
                    <h1 className='text-white text-4xl font-bold drop-shadow-xl'>The Seven Husbands of Evelyn Hugo</h1>
                    <div className=' py-4'>

                        <span className='font-normal text-white'>Most people have read the book?</span>
                    </div>
                    <button className='text-white b-1 border-solid border-white p-1 text-sm border-2 '>Shop Now</button>
                </div>
            </div>
        </a >
    )
}
