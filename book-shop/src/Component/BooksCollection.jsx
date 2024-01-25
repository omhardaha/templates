import React from 'react'
import SingleBook from "./SingleBook"
import SingleBook3 from './SingleBook3'

export default function BooksCollection() {
    return (
        <div className='max-w-screen-xl md:m-auto mx-10 my-10'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                <SingleBook className="h-5/6" imageLink = {"https://images2.penguinrandomhouse.com/cover/9780593500484"}/>
                <SingleBook3 className="h-5/6" imageLink = {"https://images2.penguinrandomhouse.com/cover/9780593500484"}/>
                <SingleBook3 className="h-5/6" imageLink = {"https://images4.penguinrandomhouse.com/cover/9780375756726"}/>
                <SingleBook className="h-5/6" imageLink={"https://images2.penguinrandomhouse.com/cover/9780593178553"}/>
                <SingleBook className="h-5/6" imageLink={"https://images3.penguinrandomhouse.com/cover/9780452284234"}/>
            </div>
        </div>
    )
}
