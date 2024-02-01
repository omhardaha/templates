import React from 'react' 
import Header from "../component/Header";
import TopPicks from "../component/TopPicks"; 
import Quotes from "../component/Quotes";
import SinglePage from "../component/SinglePage";
import BookContainerLg from '../component/container/BookContainerLg';
import { bookData2 } from '../data/book-data-2'; 
import MedBook2 from '../component/single-book/MedBook2';

const Products = () => {
    return (
        <div className="lg:mx-20 mx-10   bg-white">
            <div className='max-w-screen-xl md:m-auto mx-10 my-10 bg-white'>
                <h1 className='text-3xl text-larq font-bold py-4 my-2'>{"Popular Products"}</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>

                    {
                        bookData2.map(book => <MedBook2 imageLink={book.imgLink} name={book.name} price={book.price} />)
                    }
                </div>
                <h1 className='text-3xl my-2 text-larq font-bold py-4'>{"Editor Choice"}</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>

                    {
                        bookData2.map(book => <MedBook2 imageLink={book.imgLink} name={book.name} price={book.price} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Products;