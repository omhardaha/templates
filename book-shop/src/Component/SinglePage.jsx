import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
// import { IoMdStar,IoStarHalfOutline,IoStarOutline} from 'react-icons/io5'
import { RiStarSFill, RiStarSLine, RiStarHalfSLine } from 'react-icons/ri'
import { BsChevronDown, BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { ImQuotesLeft } from 'react-icons/im'
import { useState } from 'react';
export default function SinglePage() {
    let reviewData = [{ title: "The Psychology of Money is bursting with interesting ideas and practical takeaways. Quite simply, it is essential reading for anyone interested in being better with money. Everyone should own a copy.", author: "James Clear" }, { title: "Morgan Housel is one of the brightest new lights among financial writers. He is accessible to everyone wanting to learn more about the psychology of money. I highly recommend this book.", author: "Morgan P. O’Shaughnessy" }, { title: "Few people write about finance with the graceful clarity of Morgan Housel. The Psychology of Money is an essential read for anyone who wants to make wiser decisions or live a richer life.", author: " Daniel H. Pink" },];
    const [indexOfReview, setIndexOfReview] = useState(0);

    return (
        <>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6  mt-20 '>
                <div className='bg-larq2 h-full'>
                    <div className='bg-larq2'>

                        <img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl text-larq font-bold py-4'>One Hundred Years of Solitude.</h1>
                    <span className='text-xl text-larq font-bold py-4'>$599.00</span>
                    <div>
                        <s className='text-xl text-blue-1000 opacity-20 font-bold py-4'>$599.00</s>
                    </div>
                    <div className='flex items-center'>

                        <span className='text-grey-200 font-[Mukta]'>or Pay in 4 installments Of $100. </span><AiFillInfoCircle className='inline' />
                    </div>
                    <div className=' m-auto my-auto'>
                        <RiStarSFill className='inline text-orange-500' />
                        <RiStarSFill className='inline text-orange-500' />
                        <RiStarSFill className='inline text-orange-500' />
                        <RiStarHalfSLine className='inline text-orange-500' />
                        <RiStarSLine className='inline text-neutral-400 ' />
                        <span className='text-neutral-400 text-sm'> 4000 Review</span>
                    </div>
                    <p className='text-green-500 font-[Mukta]'>International Edition.</p>
                    <p className='font-[Mukta]'>Ships within 16-18 Business Days.</p>
                    <p className='font-[Mukta]'> Free Shipping in India and low cost Worldwide.</p>

                    <div className='my-10'>
                        <button className='my-2 py-3 text-larq b-custom border-solid border-current w-full p-1 text-sm '> Add To Card</button>
                        <button className='my-2 py-3  text-white bg-larq hover:bg-white hover:text-larq duration-500 ease-in b-custom border-solid border-larq w-full p-1 text-sm '> Buy Now</button>
                        <p className='text-center text-neutral-500'>12-month warranty 100% secure checkout</p>
                    </div>
                    <div className='mb-10 '>
                        {/* <details>
                            <summary>Product Description</summary>
                            <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={false}>
                                <img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600" />
                            </Animated>
                        </details> */}
                        <div className='drop-shadow-xl py-6'>
                            <details open className='detailAnimaion list-none text-larq font-500'>
                                <summary className='font-medium cursor-pointer flex items-in  justify-between'>Product Description <BsChevronDown /></summary>
                                <p className='text-slate-500 py-2 text-normal'>A good book description is a detailed, descriptive copy that is good for public display, used for your book marketing, book discovery, and for sales purposes. It helps potential buyers find and understand your book. It's your pitch. Your chance to get people interested.
                                    After the title and the cover, the most important marketing material for your book is the description. The book description goes on the back cover and right below the price (on Amazon). It's crucial that this short paragraph be right.
                                    Description is the fiction-writing mode for transmitting a mental image of the particulars of a story. Together with dialogue, narration, exposition, and summarization, description is one of the most widely recognized of the fiction-writing modes.
                                    Description is used by writers in order to encourage their audiences to have a more specific reading of a text. An adjective modifies a noun; that is, it provides more detail about a noun. This can be anything from color to size to temperature to personality. Adjectives usually occur just before the nouns they modify.</p>
                            </details>
                        </div>
                        <div className='drop-shadow-xl py-6'>
                            <details open className='detailAnimaion list-none text-larq font-500'>
                                <summary className='font-medium cursor-pointer flex items-in  justify-between'>Shipping & Return <BsChevronDown /></summary>
                                <p className='text-slate-500 py-2 text-normal'>Free shipping on orders over $80.
                                    We would be happy to accept returns of any unused LARQ product (excluding charging cables and personalized LARQ Bottles) in its original packaging within 30 days of the purchase date.
                                    Our standard return policy will apply.
                                    What is a return policy? Return policies are the rules a retailer creates to manage how customers return and exchange unwanted merchandise they purchased. A return policy tells customers what items can be returned and for what reasons, as well as the timeframe over which returns are accepted.</p>
                            </details>
                        </div>
                        <div className='drop-shadow-xl py-6'>
                            <details className='detailAnimaion list-none text-larq font-500'>
                                <summary className='font-medium cursor-pointer flex items-in  justify-between'>Acceseries <BsChevronDown /></summary>
                                <p className='text-slate-500 py-2 text-normal'>Free shipping on orders over $80.
                                    We would be happy to accept returns of any unused LARQ product (excluding charging cables and personalized LARQ Bottles) in its original packaging within 30 days of the purchase date.
                                    Our standard return policy will apply.
                                    What is a return policy? Return policies are the rules a retailer creates to manage how customers return and exchange unwanted merchandise they purchased. A return policy tells customers what items can be returned and for what reasons, as well as the timeframe over which returns are accepted.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-blue-50 my-40 lg:mx-20'>

                <div className='p-20 text-larq text-3xl font-bold  '>
                    <div className='my-10'>
                        <ImQuotesLeft className='text-orange-400 ' />
                    </div>
                    <span className='mt-10 duration-1000 ease-in transition-transform'>{reviewData[indexOfReview].title}</span>
                    <div className='flex  justify-between pt-20 '>
                        <div>
                            <span className='text-2xl'> {reviewData[indexOfReview].author.toUpperCase()} </span>
                        </div>
                        <div className='flex gap-10 cursor-pointer'>
                            <BsArrowLeft className={indexOfReview === 0 && 'opacity-20'} onClick={() => { if (indexOfReview > 0) setIndexOfReview(indexOfReview - 1) }} />
                            <BsArrowRight className={indexOfReview === reviewData.length - 1 && 'opacity-20'} onClick={() => { if (indexOfReview < reviewData.length - 1) setIndexOfReview(indexOfReview + 1) }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' p-8 lg:p-40 md:p-20 mb-20'>
                <h1 className='text-larq text-center text-4xl font-bold ' >Awards</h1>
                <p className='text-center text-slate-600 py-8'>An award-winning person or thing has won an award, especially an important or valuable one.</p>
                <div className='grid grid-cols-3 md:gap-3 h-30'>
                    <div className='bg-blue-50 md:p-10 h-30'>
                        <img className='h-auto' src="https://i0.wp.com/www.nationalbook.org/wp-content/uploads/2016/03/nba-winner-sticker.png?fit=500%2C500&ssl=1" alt="" />
                    </div>
                    <div className='bg-blue-50   md:p-10'>
                        <img className='h-auto' src="https://hungrymonsterreview.files.wordpress.com/2020/06/literary-titan-gold-book-award-icon.png?w=303" alt="" />
                    </div>
                    <div className='bg-blue-50 md:p-10'>
                        <img className='h-auto' src="https://lh3.googleusercontent.com/l_5j5HVv0HWhHpd1x24E6fHaL5qRpEHsMxXBGQ-a86ovVB8RsBVccwq3Lj8ADx4aVlcPFmj9i7DhSArZL0qJR00=s0" alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 grid grid-cols-2'>
                <div className='mb-10'>
                    <p className='text-orange-400 text-2xl'> Overall rating for</p>
                    <h1 className='text-3xl text-larq font-bold py-4'>One Hundred Years of Solitude.</h1>
                    <span className='my-20 text-larq text-5xl'> <span className='text-8xl  font-bold'>4.7</span>/5</span>
                    <div className=' m-auto my-4'>
                        <RiStarSFill className='inline text-orange-500' />
                        <RiStarSFill className='inline text-orange-500' />
                        <RiStarSFill className='inline text-orange-500' />
                        <RiStarHalfSLine className='inline text-orange-500' />
                        <RiStarSLine className='inline text-neutral-400 ' />
                        <span className='text-neutral-400 text-sm'> 45635 Review</span>
                    </div>
                </div>
                <div>
                    <div className='bg-white m-8 p-4 font-bold'>
                        <h1 className='text-larq text-3xl '> I wish if I have read this book 20 years ago!! </h1>
                        <div className=' m-auto my-4'>
                            <RiStarSFill className='inline text-orange-500' />
                            <RiStarSFill className='inline text-orange-500' />
                            <RiStarSFill className='inline text-orange-500' />
                            <RiStarHalfSLine className='inline text-orange-500' />
                            <RiStarSLine className='inline text-neutral-400 ' />
                            <span className='text-neutral-400 text-sm mx-3'>Amar Z.</span>
                            <span className='text-green-400 text-sm'>Verified Buyer</span>
                            <span className='text-neutral-400 text-sm mx-3'>India</span>
                            <span className='text-neutral-400 text-sm'>09/07/2022</span>
                        </div>
                        <p className='text-larq3 font-normal'>
                            Money management is not rocket science.
                            It is a process that takes patience and care.
                            This book gave me a great perspective and tips on how to manage your expectations and the necessary path to become wealthy.
                            The best part of this book is that the author has distilled key informations from various great books and presented the information for his readers. This have helped me a lot to understand various aspects of life and money management.
                            Biggest take away: Have high saving rate, reduce unnecessary spending, live a happy life without stressing over neighbors’ spending habits and invest in indexes. It is a long game, give time in the market rather than timing it.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
