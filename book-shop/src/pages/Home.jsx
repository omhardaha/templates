import React from 'react'

import Header from "../component/Header";
import TopPicks from "../component/TopPicks";
import BooksCollection2 from "../component/BOOK_GROUP_MD";
import Quotes from "../component/Quotes";
import SinglePage from "../component/SinglePage";

const Home = () => {
    return (
        <div><div className="lg:mx-20 mx-10  ">
            {/* <SinglePage /> */}
            <Header />
            <TopPicks />
            <BooksCollection2 heading={"For Gift Someone"} />
            <BooksCollection2 heading={"Non-Fiction"} />
            <Quotes />
        </div></div>
    )
}

export default Home