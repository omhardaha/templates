import React from 'react'
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className='bg-larq text-white sticky top-[100vh] w-full text-center md:text-left'>

            <div className=' p-10'>
                <div className='grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>
                    <div className=' p-2 m-4 '>
                        <h1 className='text-lg font-bold '>Help</h1>
                        <ul>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Frequently Asked Questions</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Review</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">My Account</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Gift Center</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='  p-2 m-4 text-white'>
                        <h1 className='text-lg font-bold '>Shop</h1>
                        <ul className='cursor-pointer'>
                            <li className='py-2 '>
                                <a href="https://github.com/omhardaha">FAQ</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Review</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">My Account</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Gift</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='  p-2 m-4 text-white'>
                        <h1 className='text-lg font-bold '>About</h1>
                        <ul>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Best Magezine</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Our Story</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">My Account</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Gift</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='  p-2 m-4 text-white'>
                        <h1 className='text-lg font-bold '>Help</h1>
                        <ul>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">FAQ</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Review</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">My Account</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Gift</a>
                            </li>
                            <li className='py-2'>
                                <a href="https://github.com/omhardaha">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 justify-center md:grid-cols-3 md:justify-between p-8'>
                <div className='py-3'>@2024 Books Corporation</div>
                <div className='flex  gap-3 text-center justify-center items-center py-3 cursor-pointer'>
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                    <BsLinkedin />
                </div>
                <div className='md:text-right py-3 cursor-pointer'>Terms & Condition</div>
            </div>
        </div>
    )
}
