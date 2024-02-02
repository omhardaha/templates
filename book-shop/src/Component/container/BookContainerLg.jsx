import React, { useEffect, useState } from 'react';
import MD_BOOK_1 from "../single-book/MD_BOOK_1.jsx";
import { bookData } from "../../data/book-data.js"


export default function BookContainerLg({ heading,search }) {
    const [latestBooks, setLatestBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=search+${heading}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                if (data.items) {
                    // const books = data.items.map(item => ({
                    //     imageLink: item.volumeInfo.imageLinks.thumbnail,
                    //     name: item.volumeInfo.title,
                    //     price: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 'Price not available'
                    // }));
                    setLatestBooks(data.items);
                }
                console.log(data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [heading]); // Empty dependency array to ensure the effect runs only once

    return (
        <div>
            <div className='max-w-screen-xl md:m-auto mx-10 my-10'>
                <h1 className='text-3xl text-larq font-bold py-4'>{heading}</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>

                    {/* {
                        bookData.map(book => <MD_BOOK_1 imageLink={book.imgLink} name={book.name} price={book.price} />)
                    } */}
                    {
                        latestBooks.map(book => <MD_BOOK_1 imageLink={book.volumeInfo.imageLinks?.thumbnail} name={book.volumeInfo.title} price={"10"} />)
                    }
                </div>
            </div>
        </div>
    )
}
