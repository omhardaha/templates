import React from 'react'
import CART_ITEMS from '../component/cart/CART_ITEMS';

const Cart = () => {
    return (
        <div className=' bg-blue-50 mx-auto text-larq text-lg mt-4'>

            {/* Heading  */}
            <div className='p-4 my-2 md:mx-auto bg-white mx-3 md:w-3/5 text-center text-xl'>
                <div className=''>
                    <b>Cart</b>
                </div>
            </div>

            {/* Address  */}
            <div className='p-4 my-2 md:mx-auto bg-white mx-3 md:w-3/5 '>
                <div className='flex justify-between '>
                    <div className=''>
                        Deliver to: <b>Jabalpur - 482002</b>
                    </div>
                    <div className='p-1 rounded-xl bg-slate-100'>
                        <button className='font-bold hover:text-cyan-500 duration-500 '>Change</button>
                    </div>
                </div>
            </div>

            {/* Items */}
            <div className='px-8 pt-8 py-2 md:mx-auto bg-white mx-3 md:w-3/5 '>
                <CART_ITEMS old_price={100} price={210} qty={4} />
                <CART_ITEMS old_price={120} price={250} qty={3} />
                <CART_ITEMS old_price={119} price={270} qty={1} />
            </div>

            {/* Price */}
            <div className='p-4  md:mx-auto bg-white mx-3 md:w-3/5 my-3 text-xl'>
                <div className='flex justify-between '>
                    <div className=''>
                        <div className='my-4'>PRICE:</div>
                        <div className='my-4'>Discount:</div>
                        <div className='my-4'>Delivery Fee:</div>
                        <hr />
                        <div className='my-4 font-bold'>Total Amount:</div>
                    </div>
                    <div>
                        <div className='my-4'>$400</div>
                        <div className='my-4'>-$300</div>
                        <div className='my-4 text-green-600'>Free</div>
                        <hr />
                        <div className='my-4 font-bold'>$100</div>
                    </div>
                </div>
                <div className='text-end text-green-600 text-lg' >
                    You will save $200 on this order.
                </div>
                <div className='text-end mt-4'>
                    <button onClick={() => { alert("Order Placed. ") }} className='bg-larq text-white p-3 rounded-md'>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;