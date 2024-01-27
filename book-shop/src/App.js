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

export default function App() {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter> 
            <Footer />
        </>
    );
}
