import "./App.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
// import Temp from "./page/Temp";

export default function App() {
    return (
        <>
        <div className=" bg-blue-50">

            <NavBar />
            <div className="h-16"></div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path="/temp" element={<Temp />} /> */}
                </Routes>
            </BrowserRouter> 
            <Footer />
        </div>
        </>
    );
}
