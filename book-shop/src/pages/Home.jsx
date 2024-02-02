import React from 'react';
import Header from '../component/home/Header';
import TopPicks from '../component/home/TopPicks';
import Quotes from '../component/home/Quotes';
import BookContainerLg from '../component/container/BookContainerLg';
import Footer from '../component/footer/Footer';
import NavBar from '../component/navbar/NavBar';
// import SinglePage from "../component/Product";

function Home() {
  return (
    <div className="lg:mx-20 mx-10">
      {/* <SinglePage /> */}
      <NavBar />
      <Header />
      <TopPicks />
      <BookContainerLg heading="For Gift Someone" />
      <BookContainerLg heading="Non-Fiction" />
      <Quotes />
      <Footer />
    </div>
  );
}

export default Home;

