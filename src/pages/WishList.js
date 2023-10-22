import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
const WishList = () => {
    return (
        <>
            <BreadCrumb title={"Wishlist"} />
            <Container class1={"wishlist-wrapper home-wrapper-2 py-5"}>
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-cart position-relative">
                            <img src="/images/cross.svg" className="position-absolute cross img-fluid" alt="cross" />
                            <div className="wishlist-cart-img">
                                <img src="/images/watch.jpg" className="img-fluid w-100" alt="watch" />
                            </div>
                            <div className="py-3 px-2">
                                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G Tablet </h5>
                                <h6 className="price my-4">$5555</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default WishList;
