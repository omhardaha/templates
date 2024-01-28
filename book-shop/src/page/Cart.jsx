import React from 'react'

const Cart = () => {
    return (
        <div className='h-48 bg-blue-100 mx-auto text-larq text-lg'>
            <div className='p-4 my-1 mx-auto bg-white w-5/6 text-center text-xl'>
                <div className=''>
                    <b>Cart</b>
                </div>
            </div>
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
        </div>
    )
}

export default Cart;