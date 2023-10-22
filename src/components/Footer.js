import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex align-items-center gap-4 ">
                                <img src={newsletter} alt="newsletter" />
                                <h2 className="text-white mb-0">Sign up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Enter Your Email Address..."
                                    aria-label="Enter Your Email Address..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text px-5" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Me</h4>
                            <div>
                                <address className="text-white fs-5">
                                    Address: 52/255 Nguyễn Khang, Yên Hòa, Cầu Giấy , Hà Nội
                                </address>
                                <a href="tel:0867604223" className="mt-4 d-block mb-1 text-white">
                                    Phone :0867604223
                                </a>
                                <a
                                    href="mailto:Nguyenkimdat13092003@gmail.com"
                                    className="mt-4 d-block mb-2 text-white"
                                >
                                    Email: Nguyenkimdat13092003@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-5 mt-5">
                                    <a href="" className="text-white">
                                        <BsFacebook className="fs-5 " />
                                    </a>
                                    <a href="" className="text-white">
                                        <BsInstagram className="fs-5  " />
                                    </a>
                                    <a href="" className="text-white">
                                        <BsGithub className="fs-5 " />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link to={"/privacy-policy"} className="text-white py-3 mb-1">
                                    Privacy Policy
                                </Link>
                                <Link to={"/refund-policy"} className="text-white py-3 mb-1">
                                    Refund Policy
                                </Link>
                                <Link to={"/shipping-policy"} className="text-white py-3 mb-1">
                                    Shipping Policy
                                </Link>
                                <Link to={"/term-conditions"} className="text-white py-3 mb-1">
                                    Terms & Conditions
                                </Link>
                                <Link to={"/blog"} className="text-white py-3 mb-1">
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-3 mb-1">About Me</Link>
                                <Link className="text-white py-3 mb-1">Faq</Link>
                                <Link className="text-white py-3 mb-1">Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quic Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-3 mb-1">Laptops</Link>
                                <Link className="text-white py-3 mb-1">HeadPhone</Link>
                                <Link className="text-white py-3 mb-1">Tablet</Link>
                                <Link className="text-white py-3 mb-1">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center text-white mb-0">
                                &copy; {new Date().getFullYear()} ; Powered by Developer's corner
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
