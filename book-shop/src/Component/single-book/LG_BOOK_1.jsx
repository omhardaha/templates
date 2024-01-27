import React from 'react'

export default function LARGE_BOOK_1({ imageLink,name }) {
    return (
        <div className='bg-larq2 text-larq font-semibold flex flex-col justify-center items-center p-10' >
            <div className='flex flex-col justify-center items-center py-6'>
                <h1 className='text-3xl py-4'>The Lord of the Rings</h1>
                <span className='text-center m-auto'> Starting at $199</span>
            </div>

            <div >
                <img className=' inline hover:rotate-6 duration-200 ease-in' src={imageLink} alt="" />
            </div>
            <div className=' py-4'>
                <span className='font-normal text-gray-400'>Most people have seen the epic movie, but have you read the book?</span>
            </div>
        </div>
    )
}
