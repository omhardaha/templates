import React from 'react'
import { IoAddSharp, IoRemoveOutline } from "react-icons/io5";
const Cart = () => {
    return (
        <div className=' bg-blue-100 mx-auto text-larq text-lg'>

            {/* Heading  */}
            <div className='p-4 my-1 mx-auto bg-white w-5/6 text-center text-xl'>
                <div className=''>
                    <b>Cart</b>
                </div>
            </div>

            {/* Address  */}
            <div className='p-4 my-1 mx-auto bg-white w-5/6 '>
                <div className='flex justify-between '>
                    <div className=''>
                        Deliver to: <b>Jabalpur - 482002</b>
                    </div>
                    <div className='border-2 p-2 rounded-lg '>
                        <button className='font-bold'>Change</button>
                    </div>
                </div>
            </div>

            {/* Items */}
            <div className='p-4 my-1 mx-auto bg-white w-5/6 '>
                <div className='flex justify-between items-center my-1 '>
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
                    <div className=' '>
                        <button className='text-4xl m-1 bg-slate-100 rounded-xl hover:bg-larq hover:text-white'>
                            <IoAddSharp />
                        </button>
                        <button className='text-4xl m-1 bg-slate-100 rounded-xl hover:bg-larq hover:text-white'><IoRemoveOutline /></button>
                    </div>
                </div>
                <div className='flex justify-between items-center my-1 '>
                    <div className=''>
                        <div >
                            <img className='h-40 inline ' src={"https://images3.penguinrandomhouse.com/cover/9780452284234"} alt="" />
                        </div>
                    </div>
                    <div className=' '>
                        <button className='text-4xl m-1 bg-slate-100 rounded-xl hover:bg-larq hover:text-white'>
                            <IoAddSharp />
                        </button>
                        <button className='text-4xl m-1 bg-slate-100 rounded-xl hover:bg-larq hover:text-white'><IoRemoveOutline /></button>
                    </div>
                </div>
            </div>

            {/* Price */}
            <div className='p-4 my-1 mx-auto bg-white w-5/6 '>
                <div>PRICE</div>
                <div>MRP</div>
                <div>Discount</div>
                <div>Delivery Fee</div>
                <div>Total Amount</div>
            </div>
        </div>
    )
}

export default Cart;