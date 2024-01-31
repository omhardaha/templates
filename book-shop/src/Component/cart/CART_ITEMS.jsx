import React from 'react'
import { IoAddSharp, IoRemoveOutline } from 'react-icons/io5'

const CART_ITEMS = ({old_price,price,qty}) => {
    return (
    <div className='flex justify-between items-center mb-8 '>
        <div className='flex'>
            <div >
                <img className='h-32 inline ' src={"https://images3.penguinrandomhouse.com/cover/9780452284234"} alt="" />
            </div>
            <div className='ml-2'>

                <div className='text-larq text-xl'> The Lord of the Rings</div>
                <div className='text-slate-400 text-sm'> Author : 	J. R. R. Tolkien</div>
                <div>
                    <s className='text-sm mr-1 text-slate-500'>${old_price}</s>
                    <b className='text-2xl'>${price} </b>
                    {/* <div className='text-xl'>Quantity {qty} </div> */}
                </div>
            </div>
        </div>
        <div>

        <div className=' items-center flex ease-in '>
            <button className='hover:text-cyan-500 duration-500 text-4xl m-1 bg-slate-100 rounded-xl'>
                <IoAddSharp />
            </button>
            <b className='mx-1'>{qty}</b>
            <button className='text-4xl m-1 bg-slate-100 rounded-xl hover:text-cyan-500 duration-500'><IoRemoveOutline /></button>
        </div>
        <div className='font-semibold'>
            Price : {qty*price}
        </div>
        </div>
    </div>
    )
}

export default CART_ITEMS