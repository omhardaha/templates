import "./App.css";
import Nav from "./Component/Nav";
import NavBar2 from "./Component/NavBar2";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import BooksCollection from "./Component/BooksCollection";
import BooksCollection2 from "./Component/BooksCollection2";
import Quotes from "./Component/Quotes";
import SingleBook from "./Component/SingleBook";
import SinglePage from "./Component/SinglePage"; 

export default function App() {
	return (
		<>
			<Nav />
            {/* <NavBar2/> */}
			<div className="lg:mx-20 mx-10  ">
				{/* <div className="h-20"> </div> */}
				<SinglePage />
				<Header />
				<BooksCollection />
				<BooksCollection2 text={"For Gift Someone"} />
				<BooksCollection2 text={"Non-Fiction"} />
				<Quotes />
			</div>
			<Footer />
		</>
	);
}
