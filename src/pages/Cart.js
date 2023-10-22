import React from "react";
import BreadCrumb from "../components/BreadCrumb";
// import watch from "../assets/images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Cart = () => {
    return (
        <>
            <BreadCrumb title={"Cart"} />
            <Container class1={"cart-wrapper home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <div className="cart-table-wrapper">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">
                                            Product
                                        </th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="align-middle">
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="cart-product-img">
                                                    <img src={""} className="img-fluid" alt="" />
                                                </div>
                                                <div className="cart-product-info">
                                                    <p>afdasdf</p>
                                                    <p>Size : xxl</p>
                                                    <p>Color : red</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5 className="cart-product-price">$555</h5>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div>
                                                    <CustomInput
                                                        type="number"
                                                        name=""
                                                        id=""
                                                        className="form-control"
                                                        min={1}
                                                        max={10}
                                                    />
                                                </div>
                                                <div>
                                                    <AiFillDelete className="text-danger fs-4" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>total</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12 py-2">
                        <div className="d-flex justify-content-between align-items-start">
                            <Link to={"/store"} className="button">
                                Continue to Shopping
                            </Link>
                            <div className="d-flex flex-column align-items-end gap-3 ">
                                <h4>SubTotal : $555</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to={"/checkout"} className="button">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;
