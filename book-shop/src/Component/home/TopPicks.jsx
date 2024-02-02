import React, { useEffect, useState } from 'react'
import LG_BOOK_1 from "../single-book/LargeBook1"
import LG_BOOK_2 from '../single-book/LargeBook2'

export default function TopPicks() {
    const [latestBooks, setLatestBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=search+${"top picks"}`);
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
    }, [latestBooks]); // Empty dependency array to ensure the effect runs only once

    return (
        <div className='max-w-screen-xl md:m-auto mx-10 my-10'>
            <h1 className='text-center text-4xl font-bold mb-6 text-larq'>Top Picks</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                <LG_BOOK_1 className="h-5/6" name={"Come and Get It"} imageLink={"https://images4.penguinrandomhouse.com/cover/9780593328200"} />
                <LG_BOOK_2 className="h-5/6" imageLink={"https://images2.penguinrandomhouse.com/cover/9780593500484"} />
                <LG_BOOK_2 className="h-5/6" imageLink={"https://images4.penguinrandomhouse.com/cover/9780375756726"} />
                <LG_BOOK_1 className="h-5/6" name={"The Anatomy of Dreams"} imageLink={"https://images4.penguinrandomhouse.com/cover/9780593172018"} />
                <LG_BOOK_1 className="h-5/6" name={"The Immortalists"} imageLink={"https://images4.penguinrandomhouse.com/cover/9780735215092"} />

            </div>
        </div>
    )
}
