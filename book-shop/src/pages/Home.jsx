import React from 'react' 
import Header from "../component/Header";
import TopPicks from "../component/TopPicks"; 
import Quotes from "../component/Quotes";
import BookContainerLg from '../component/container/BookContainerLg';
import SinglePage from "../component/SinglePage";

const Home = () => {
    return (
        <div><div className="lg:mx-20 mx-10  ">
            {/* <SinglePage /> */}
            <Header />
            <TopPicks />
            <BookContainerLg heading={"For Gift Someone"} /> 
            <BookContainerLg heading={"Non-Fiction"} />
            <Quotes />
        </div></div>
    )
}

export default Home