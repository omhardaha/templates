import React from 'react'
import SingleBook2 from "./SingleBook2"

export default function BooksCollection2({ text }) {
    return (
        <div>
            <div className='max-w-screen-xl md:m-auto mx-10 my-10'>
                <h1 className='text-3xl text-larq font-bold py-4'>{text}</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                    <SingleBook2 imageLink={"https://images2.penguinrandomhouse.com/cover/9780593500484"} />
                    <SingleBook2 imageLink={"https://images2.penguinrandomhouse.com/cover/9780593178553"} />
                    <SingleBook2 imageLink={"https://images3.penguinrandomhouse.com/cover/9780452284234"} />
                    <SingleBook2 imageLink={"https://images3.penguinrandomhouse.com/cover/9780452284234"} />
                    <SingleBook2 imageLink={"https://images3.penguinrandomhouse.com/cover/9780452284234"} />
                    <SingleBook2 imageLink={"https://images3.penguinrandomhouse.com/cover/9780452284234"} />
                    <SingleBook2 imageLink={"https://images3.penguinrandomhouse.com/cover/9780452284234"} />
                </div>
            </div>
        </div>
    )
}
