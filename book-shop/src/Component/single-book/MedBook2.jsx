import React from 'react'

export default function MedBook2({ imageLink, name, price }) {
    return (
        <a href='/product' className='bg-larq2 text-larq font-semibold flex flex-col justify-center items-center p-10' >
            <div >
                <img className='h-40 inline hover:rotate-6 duration-200 ease-in' src={imageLink} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center py-6'>
                <h1 className='text-xl py-4 text-left'>{name}</h1>
                <span className='text-center m-auto'> Starting at {price}  <s className='pl-1 font-thin'>$199 </s> </span>
            </div>
        </a>
    )
}
