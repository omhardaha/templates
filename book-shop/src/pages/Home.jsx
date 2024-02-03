import React from 'react';
import Header from '../component/home/Header';
import TopPicks from '../component/home/TopPicks';
import Quotes from '../component/home/Quotes';
import BookContainerLg from '../component/container/BookContainerLg';
// import SinglePage from "../component/Product";

function Home() {
  return (
    <div className="lg:mx-20 mx-10">
      {/* <SinglePage /> */}
      <Header />
      <TopPicks />
      <BookContainerLg heading="For Gift Someone" />
      <BookContainerLg heading="Non-Fiction" />
      <Quotes />
    </div>
  );
}

export default Home;

