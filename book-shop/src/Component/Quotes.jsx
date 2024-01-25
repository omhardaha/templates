import React from 'react'
import { ImQuotesLeft } from "react-icons/im"

export default function Quotes() {
    return (
        <div className='max-w-screen-xl m-auto my-44'>
            <div className='flex justify-center text-4xl text-larq font-semibold lg:mx-56 md:mx-32 mx-20  '>

                <ImQuotesLeft className='pr-4 scale-150 color-red' /><span>
                    The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.
                </span>
            </div>
            <div className='flex py-4 text-2xl text-larq font-thin lg:mx-56 md:mx-32 mx-20 '> - Jane Austen, Northanger Abbey</div>
        </div>
    )
}
