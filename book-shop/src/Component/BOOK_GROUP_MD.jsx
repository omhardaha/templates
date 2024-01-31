import React from 'react';
import MD_BOOK_1 from "./single-book/MD_BOOK_1";
import { bookData} from "../data/book-data.js"


export default function BOOK_GROUP_MD({ heading }) {
    return (
        <div>
            <div className='max-w-screen-xl md:m-auto mx-10 my-10'>
                <h1 className='text-3xl text-larq font-bold py-4'>{heading}</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>

                    {
                        bookData.map(book => <MD_BOOK_1 imageLink={book.imgLink} name={book.name} price={book.price} />)
                    }
                </div>
            </div>
        </div>
    )
}
