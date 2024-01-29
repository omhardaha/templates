import React from 'react'
import { IoAddSharp, IoRemoveOutline } from 'react-icons/io5'

const CART_ITEMS = () => {
    return (
    <div className='flex justify-between items-center my-2 '>
        <div className='flex'>
            <div >
                <img className='h-32 inline ' src={"https://images3.penguinrandomhouse.com/cover/9780452284234"} alt="" />
            </div>
            <div className='ml-2'>

                <div>
                    The Lord of the Rings
                </div>
                <div>
                    <s className='text-sm mr-1'>$100</s>
                    <b className='text-2xl'>$40 x 3 </b>
                </div>
            </div>
        </div>
        <div className=' items-center flex ease-in '>
            <button className='hover:text-cyan-500 duration-500 text-4xl m-1 bg-slate-100 rounded-xl'>
                <IoAddSharp />
            </button>
            <b className='mx-1'>3</b>
            <button className='text-4xl m-1 bg-slate-100 rounded-xl hover:text-cyan-500 duration-500'><IoRemoveOutline /></button>
        </div>
    </div>
    )
}

export default CART_ITEMS