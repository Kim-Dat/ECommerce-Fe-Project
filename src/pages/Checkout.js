import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Container from "../components/Container";
const CheckOut = () => {
    return (
        <>
            <Container class1={"checkout-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name fs-1 mb-3">Dev/at.</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item total-price ">
                                        <Link to={"/cart"} className="text-dark">
                                            Cart
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item total-price active" aria-current="page">
                                        Information
                                    </li>
                                    <li className="breadcrumb-item total-price active">Shipping</li>
                                    <li className="breadcrumb-item total-price active" aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title">Contact Information</h4>
                            <p className="user-details total py-2">Nguyen Kim Dat</p>
                            <h4 className="my-4">Shipping Address</h4>
                            <form className="d-flex flex-wrap justify-content-between gap-3" action="">
                                <div className="w-100">
                                    <select
                                        name=""
                                        className="form-select form-control"
                                        defaultValue={"select-country"}
                                        id=""
                                    >
                                        <option value={"select-country "} disabled>
                                            {" "}
                                            Select Country
                                        </option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                                <div className="w-100">
                                    <input type="text" className="form-control" placeholder="Address" />
                                </div>
                                <div className="w-100">
                                    <input type="text" className="form-control" placeholder="Apartment, suite, atc" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" className="form-control" placeholder="City" />
                                </div>
                                <div className="flex-grow-1">
                                    <select
                                        name=""
                                        className="form-select form-control"
                                        defaultValue={"select-state"}
                                        id=""
                                    >
                                        <option value={"select-state"}>Select State</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" className="form-control" placeholder="Zipcode" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to={"/cart"} className="text-dark d-flex align-items-center gap-2">
                                            <BsFillArrowLeftCircleFill className="fs-4" />
                                            Return to Cart
                                        </Link>
                                        <Link to={"/cart"} className="button-small">
                                            Continue to Shipping
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="line-border-bottom">
                            <div className="d-flex gap-3 justify-content-between align-items-center">
                                <div className="d-flex gap-3">
                                    <div className="w-25 position-relative">
                                        <span
                                            style={{ top: "-6px", right: "-4px" }}
                                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                        >
                                            1
                                        </span>
                                        <img src={""} className="img-fluid" alt="watch" />
                                    </div>
                                    <div>
                                        <h5 className="total">asdas</h5>
                                        <p className="total-price">asdasdas</p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="total">$555</h5>
                                </div>
                            </div>
                        </div>
                        <div className="line-border-bottom ">
                            <div className="d-flex justify-content-between align-item-center py-2 ">
                                <p className="total">SubTotal </p>
                                <p className="total-price">$555</p>
                            </div>
                            <div className="d-flex justify-content-between align-item-center py-2 ">
                                <p className="total">Shipping </p>
                                <p className="total-price">$555</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-item-center p-3">
                            <h4 className="total">Total </h4>
                            <h5 className="total-price">$555</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CheckOut;
