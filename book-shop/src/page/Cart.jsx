import React from 'react' 
import CART_ITEMS from '../component/cart/CART_ITEMS';
const Cart = () => {
    return (
        <div className=' bg-blue-50 mx-auto text-larq text-lg mt-4'>

            {/* Heading  */}
            <div className='p-4 my-2 mx-auto bg-white w-3/5 text-center text-xl'>
                <div className=''>
                    <b>Cart</b>
                </div>
            </div>

            {/* Address  */}
            <div className='p-4 my-2 mx-auto bg-white w-3/5 '>
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
            <div className='p-5 my-1 mx-auto bg-white w-3/5 '>
                <CART_ITEMS/>
                <CART_ITEMS/>                
                <CART_ITEMS/>                
            </div>

            {/* Price */}
            <div className='p-4 my-1 mx-auto bg-white w-3/5 '>
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