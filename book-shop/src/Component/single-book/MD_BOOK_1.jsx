import React from 'react'

export default function MID_BOOK_1({ imageLink,name,price }) {
    return (
        <div className='bg-larq2 text-larq font-semibold flex flex-col justify-center items-center p-10' >
            <div >
                <img className='h-40 inline hover:rotate-6 duration-200 ease-in' src={imageLink} alt="" />
            </div>

            <div className='flex flex-col justify-center items-center py-6'>
                <h1 className='text-xl py-4'>{name}</h1>
                <span className='text-center m-auto'> Starting at $199 <s className='pl-1 font-thin'>  {price}</s></span>
            </div>

            {/* <div className=' py-4'>
                <span className='font-light text-gray-400'>Most people have seen the epic movie, but have you read the book?</span>
            </div> */}
        </div>
    )
}
