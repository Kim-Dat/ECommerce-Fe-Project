import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blogs from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndConditions from "./pages/TermAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFoundFage from "./pages/NotFoundFage";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="store" element={<Store />} />
                        <Route path="product/:id" element={<SingleProduct />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="blog/:id" element={<SingleBlog />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="compare-product" element={<CompareProduct />} />
                        <Route path="wishlist" element={<WishList />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="forgot-password" element={<ForgotPassword />} />
                        <Route path="reset-password" element={<ResetPassword />} />
                        <Route path="privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="shipping-policy" element={<ShippingPolicy />} />
                        <Route path="term-conditions" element={<TermAndConditions />} />
                        <Route path="refund-policy" element={<RefundPolicy />} />
                    </Route>
                    <Route path="*" element={<NotFoundFage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
