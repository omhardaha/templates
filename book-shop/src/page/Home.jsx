import React from 'react'

import Header from "./component/Header";
import BooksCollection from "./component/BOOK_GROUP_LG";
import BooksCollection2 from "./component/BOOK_GROUP_MD";
import Quotes from "./component/Quotes";
import SinglePage from "./component/SinglePage";

const Home = () => {
    return (
        <div><div className="lg:mx-20 mx-10  ">
            <SinglePage />
            <Header />
            <BooksCollection />
            <BooksCollection2 text={"For Gift Someone"} />
            <BooksCollection2 text={"Non-Fiction"} />
            <Quotes />
        </div></div>
    )
}

export default Home