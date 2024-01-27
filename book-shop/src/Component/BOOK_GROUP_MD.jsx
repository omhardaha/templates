import React from 'react'
import MD_BOOK_1 from "./single-book/MD_BOOK_1"

const books = [
    {
        name: "The Lord of the Rings",
        price: "$20",
        imgLink: "https://images3.penguinrandomhouse.com/cover/9780452284234"
    },
    {
        name: "The Hobbit",
        price: "$15",
        imgLink: "https://images2.penguinrandomhouse.com/cover/9780547928227"
    },
    {
        name: "The Fellowship of the Ring",
        price: "$18",
        imgLink: "https://images2.penguinrandomhouse.com/cover/9780547928210"
    },
    {
        name: "The Two Towers",
        price: "$18",
        imgLink: "https://images2.penguinrandomhouse.com/cover/9780547928203"
    },
    {
        name: "The Return of the King",
        price: "$18",
        imgLink: "https://images2.penguinrandomhouse.com/cover/9780547928197"
    },
    {
        name: "The Silmarillion",
        price: "$22",
        imgLink: "https://images2.penguinrandomhouse.com/cover/9780547928227"
    },
    {
        name: "The Children of Húrin",
        price: "$20",
        imgLink: "https://images2.penguinrandomhouse.com/cover/9780547928197"
    }
];

export default function BOOK_GROUP_MD({ text }) {
    return (
        <div>
            <div className='max-w-screen-xl md:m-auto mx-10 my-10'>
                <h1 className='text-3xl text-larq font-bold py-4'>{text}</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>

                    {
                        books.map(book => <MD_BOOK_1 imageLink={book.imgLink} name={book.name} price={book.price} />)
                    }
                </div>
            </div>
        </div>
    )
}
