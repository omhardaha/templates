import React from 'react'
import LG_BOOK_1 from "./single-book/LG_BOOK_1"
import LG_BOOK_2 from './single-book/LG_BOOK_2'

export default function BOOK_GROUP_LG() {
    return (
        <div className='max-w-screen-xl md:m-auto mx-10 my-10'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                <LG_BOOK_1 className="h-5/6" imageLink={"https://images2.penguinrandomhouse.com/cover/9780593500484"} />
                <LG_BOOK_2 className="h-5/6" imageLink={"https://images2.penguinrandomhouse.com/cover/9780593500484"} />
                <LG_BOOK_2 className="h-5/6" imageLink={"https://images4.penguinrandomhouse.com/cover/9780375756726"} />
                <LG_BOOK_1 className="h-5/6" imageLink={"https://images2.penguinrandomhouse.com/cover/9780593178553"} />
                <LG_BOOK_1 className="h-5/6" imageLink={"https://images3.penguinrandomhouse.com/cover/9780452284234"} />
            </div>
        </div>
    )
}
