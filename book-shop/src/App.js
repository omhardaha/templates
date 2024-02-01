import "./App.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import SinglePage from "./component/SinglePage"; 
import Products from "./pages/Products";

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
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/product" element={<SinglePage />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        </>
    );
}
