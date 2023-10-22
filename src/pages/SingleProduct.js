import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import Color from "../components/Color";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import Container from "../components/Container";
const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    const [mainImage, setMainImage] = useState("/images/famous.jpg");
    const handleMainImageClick = (src) => {
        setMainImage(src);
    };
    const copyToClipboard = (text) => {
        console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };
    return (
        <>
            <BreadCrumb title={"Product Name"} />
            <Container class1={"main-product-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-5">
                        <div className="product-image-wrapper ">
                            <div className="main-product-image">
                                <img src={mainImage} />
                            </div>
                            <div className="other-product-images">
                                <div className="other-product-image">
                                    <img
                                        src="/images/famous-4.jpg"
                                        onClick={() => handleMainImageClick("/images/famous-4.jpg")}
                                    />
                                </div>
                                <div className="other-product-image">
                                    <img
                                        src="/images/watch.jpg"
                                        onClick={() => handleMainImageClick("/images/watch.jpg")}
                                    />
                                </div>
                                <div className="other-product-image">
                                    <img
                                        src="/images/famous-2.jpg"
                                        onClick={() => handleMainImageClick("/images/famous-2.jpg")}
                                    />
                                </div>
                                <div className="other-product-image">
                                    <img
                                        src="/images/famous-3.jpg"
                                        onClick={() => handleMainImageClick("/images/famous-3.jpg")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="main-product-details">
                            <div className="line-border-bottom">
                                <h3 className="title">Kits Headphones Bulk 10 Pack Multi Colored For Student</h3>
                            </div>
                            <div className="line-border-bottom">
                                <p className="price">$555</p>
                                <div className="d-flex align-items-center gap-2 py-2">
                                    <ReactStars count={5} size={24} value={3} activeColor="#ffd700" edit={false} />
                                    <p className="t-review">(2 Reviews)</p>
                                </div>
                                <a className="review-btn" href="#review">
                                    {" "}
                                    Write a Review
                                </a>
                            </div>
                            <div className="p-3">
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Type :</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Brand :</h3>
                                    <p className="product-data">Havells</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Category :</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Tags :</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Availablity :</h3>
                                    <p className="product-data">In Stock</p>
                                </div>
                                <div className="d-flex gap-3 flex-column  my-3">
                                    <h3 className="product-heading">Size :</h3>
                                    <div className="d-flex flex-wrap gap-3">
                                        <div className="badge border fs-5 border-1 bg-white text-dark border-secondary">
                                            S
                                        </div>
                                        <div className="badge border fs-5 border-1 bg-white text-dark border-secondary">
                                            M
                                        </div>
                                        <div className="badge border fs-5 border-1 bg-white text-dark border-secondary">
                                            L
                                        </div>
                                        <div className="badge border fs-5 border-1 bg-white text-dark border-secondary">
                                            XL
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 flex-column  my-3">
                                    <h3 className="product-heading">Color :</h3>
                                    <Color />
                                </div>
                                <div className="d-flex gap-3 flex-row align-items-center my-3">
                                    <h3 className="product-heading">Quantity :</h3>
                                    <div className="ms-4 me-2">
                                        <input
                                            id=""
                                            className="form-control fs-3"
                                            type="number"
                                            min={1}
                                            max={10}
                                            style={{ width: "60px" }}
                                            name=""
                                        />
                                    </div>
                                    <div className="d-flex align-item-center gap-3">
                                        <button type="submit" className="button-small">
                                            Add to Cart
                                        </button>
                                        <button className="button-small flip-button-color">By it Now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-5 my-4">
                                    <div>
                                        <a href="">
                                            <BiGitCompare className="fs-2 me-2" />
                                            Add to Compare
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <AiOutlineHeart className="fs-2 me-2" />
                                            Add to Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 flex-column my-3">
                                    <h3 className="product-heading">Shipping and Return :</h3>
                                    <p className="product-data ">
                                        Free shopping and return available on all order
                                        <br />I ship all us domestic order within <b>3-5 days</b>{" "}
                                    </p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Product Link :</h3>
                                    <a
                                        href="dangerouslySetInnerHTML"
                                        onClick={() => {
                                            copyToClipboard(
                                                "https://i.pinimg.com/originals/9a/28/4a/9a284a0c7371b6606ad0f885923b1b1a.jpg"
                                            );
                                        }}
                                    >
                                        Copy product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"description-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className="bg-white p-4">
                            <p>lorem ipsum dolor , sit amet consectetur adipitsing</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"reviews-wrapper home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <h3 id="review">Reviews</h3>
                        <div className="reviews-inner-wrapper">
                            <div className="reviews-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2"> Customer Reviews</h4>
                                    <div className="d-flex gap-3 align-items-center">
                                        <ReactStars count={5} size={24} value={3} activeColor="#ffd700" edit={false} />
                                        <p>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                <div>
                                    {orderedProduct && (
                                        <div>
                                            <a href="" className=" text-decoration-underline">
                                                Write a Reviews
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="reviews-form py-4">
                                <h4>Write a Review</h4>
                                <form className="d-flex flex-column gap-4" action="">
                                    <div>
                                        <ReactStars count={5} size={24} value={3} activeColor="#ffd700" edit={true} />
                                        <textarea
                                            name=""
                                            id=""
                                            className="w-100 form-control"
                                            rows={4}
                                            cols={30}
                                            placeholder="Comments"
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="button-small border-0">Submit review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className="d-flex align-items-center gap-2">
                                        <h6>Navdeep</h6>
                                        <ReactStars count={5} size={24} value={3} activeColor="#ffd700" edit={false} />
                                    </div>
                                    <p className="mt-3">
                                        Watch our infomercial to know how comment cart can help your business to thrive
                                        with your online presence and using our amazing features to drive sales to your
                                        social media shops.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;
