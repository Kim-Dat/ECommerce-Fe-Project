import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

import mainBanner from "../images/main-banner.jpg";
import catBanner1 from "../images/catbanner-01.jpg";
import catBanner2 from "../images/catbanner-02.jpg";
import catBanner3 from "../images/catbanner-03.jpg";
import catBanner4 from "../images/catbanner-04.jpg";
import { services, categories, marques } from "../utils/Data";
import Container from "../components/Container";
const Home = () => {
    return (
        <>
            <Container class1={"home-wrapper-1 py-5"}>
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="main-banner p-3 position-relative">
                            <img src={mainBanner} className="img-fluid rounded-3 " alt="mainBanner" />
                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCHARGED FOR PROS</h4>
                                <h5>iPad S13+ Pro</h5>
                                <p>From $5555 or $4444</p>
                                <Link className="button">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center">
                            <div className="small-banner position-relative">
                                <img src={catBanner1} className="img-fluid rounded-3" alt="mainBanner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>BEST SALE</h4>
                                    <h5>iPad S13+ Pro</h5>
                                    <p>
                                        From $5555
                                        <br /> or $4444
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src={catBanner2} className="img-fluid rounded-3" alt="mainBanner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>But Ipad Air </h5>
                                    <p>
                                        From $5555 <br /> or $4444
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src={catBanner3} className="img-fluid rounded-3" alt="mainBanner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>But Ipad Air </h5>
                                    <p>
                                        From $5555 <br /> or $4444
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src={catBanner4} className="img-fluid rounded-3" alt="mainBanner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>But Ipad Air </h5>
                                    <p>
                                        From $5555 <br /> or $4444
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"home-wrapper-2 py-5"}>
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {services?.map((service, index) => {
                                return (
                                    <div key={index} className="d-flex align-items-center gap-3">
                                        <img src={service.image} alt="services" />
                                        <div>
                                            <h6>{service.title}</h6>
                                            <p className="mb-0">{service.tagline}</p>
                                        </div>
                                    </div>
                                );
                            })}
                            {/* <div className="d-flex align-items-center gap-3">
                                    <img src="images/famous.jpg"/>
                                    <div>
                                        <h6>Free shipping</h6>
                                        <p className="mb-0">From all orders over $5555 </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={service1} alt="services" />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className="mb-0">Save upto 25% off</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={service2} alt="services" />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className="mb-0">Shop with an expert</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={service3} alt="services" />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className="mb-0">Get Factory Default Price</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={service4} alt="services" />
                                    <div>
                                        <h6>Sucre Payments</h6>
                                        <p className="mb-0">100% Protected Payment</p>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"home-wrapper-2 py-5"}>
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                            {categories?.map((category, index) => {
                                return (
                                    <div key={index} className="d-flex align-items-center">
                                        <div>
                                            <h6>{category.title}</h6>
                                            <p>{category.tagline}</p>
                                        </div>
                                        <img src={category.image} alt="watch" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"featured-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Featured Collection</h3>
                    </div>
                    <div className="row g-3">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </Container>
            <Container class1={"famous-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card">
                            <div className="famous-content">
                                <h5 className="text-white">Big Screen </h5>
                                <h6 className="text-white">Smart Watch Series 7 </h6>
                                <p className="text-white">From $333 or $555/mo .for 24 mo.*</p>
                            </div>
                            <div className="famous-img">
                                <img src="/images/famous-5.jpg" alt="famous" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card">
                            <div className="famous-content">
                                <h5 className="text-white">Big Screen </h5>
                                <h6 className="text-white">Smart Watch Series 7 </h6>
                                <p className="text-white">From $333 or $555/mo .for 24 mo.*</p>
                            </div>
                            <div className="famous-img">
                                <img src="/images/famous-1.jpeg" alt="famous" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card">
                            <div className="famous-content">
                                <h5 className="text-white">Big Screen </h5>
                                <h6 className="text-white">Smart Watch Series 7 </h6>
                                <p className="text-white">From $333 or $555/mo .for 24 mo.*</p>
                            </div>
                            <div className="famous-img">
                                <img src="/images/famous-2.jpg" alt="famous" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card">
                            <div className="famous-content">
                                <h5 className="text-white">Big Screen </h5>
                                <h6 className="text-white">Smart Watch Series 7 </h6>
                                <p className="text-white">From $333 or $555/mo .for 24 mo.*</p>
                            </div>
                            <div className="famous-img">
                                <img src="/images/famous-3.jpg" alt="famous" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"special-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Collection</h3>
                    </div>
                </div>
                <div className="row">
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                </div>
            </Container>
            <Container class1={"popular-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Popular products</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            <Container class1={"marque-wrapper py-5"}>
                <div className="row">
                    <div className="col-12">
                        <div className="marque-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                {marques?.map((marque, index) => {
                                    return (
                                        <div key={index} className="mx-4 w-25">
                                            <img src={marque.image} alt="brand" />
                                        </div>
                                    );
                                })}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"blog-wrapper py-5 home-wrapper-2"}>
                <div className="row g-4">
                    <div className="col-12">
                        <h3 className="section-heading">Latest Blogs</h3>
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
