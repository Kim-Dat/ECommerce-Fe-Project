import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/order/orderSlice";
import { Empty } from "antd";
const Orders = () => {
    const dispatch = useDispatch();
    const getOrderedProduct = useSelector((state) => state?.order?.getOrderedProduct?.orders);
    console.log(getOrderedProduct);
    useEffect(() => {
        dispatch(getOrders());
    }, []);
    return (
        <>
            <BreadCrumb title={"My Orders"} />
            <Container class1={"py-5 home-wrapper-2"}>
                {getOrderedProduct === undefined ? (
                    <Empty />
                ) : (
                    <>
                        <div className="row">
                            <div className="col-3">
                                <h3>Order Id</h3>
                            </div>
                            <div className="col-3">
                                <h3>Total Amount</h3>
                            </div>
                            <div className="col-3">
                                <h3>Total Amount After Discount</h3>
                            </div>
                            <div className="col-3">
                                <h3>Status</h3>
                            </div>
                        </div>
                        {!!getOrderedProduct &&
                            getOrderedProduct.map((item, index) => {
                                return (
                                    <div key={index} className="my-4">
                                        <div style={{ backgroundColor: "#febd69" }} className="row py-3">
                                            <div className="col-3">
                                                <h3>{item._id}</h3>
                                            </div>
                                            <div className="col-3">
                                                <h3>{item.totalPrice}</h3>
                                            </div>
                                            <div className="col-3">
                                                <h3>{item.totalPriceAfterDiscount}</h3>
                                            </div>
                                            <div className="col-3">
                                                <h3>{item.orderStatus}</h3>
                                            </div>
                                        </div>
                                        <div style={{ backgroundColor: "#232f3e" }} className="row text-white py-3">
                                            <div className="col-3">
                                                <h3>Product Name</h3>
                                            </div>
                                            <div className="col-3">
                                                <h3>Quantity</h3>
                                            </div>
                                            <div className="col-3">
                                                <h3>Price</h3>
                                            </div>
                                            <div className="col-3">
                                                <h3>Color</h3>
                                            </div>
                                        </div>
                                        {item.orderItems.map((p, i) => {
                                            return (
                                                <div
                                                    key={index}
                                                    style={{
                                                        backgroundColor: "#3b4149",
                                                    }}
                                                    className="row text-white py-3 border-bottom"
                                                >
                                                    <div className="col-3">
                                                        <p className="fs-4">{p.productId.title}</p>
                                                    </div>
                                                    <div className="col-3">
                                                        <h3>{p.productId.quantity}</h3>
                                                    </div>
                                                    <div className="col-3">
                                                        <h3>{p.productId.price}</h3>
                                                    </div>
                                                    <div className="col-3">
                                                        <span
                                                            style={{
                                                                backgroundColor: p.color.title,
                                                            }}
                                                            className="product-cart_color ms-3"
                                                        ></span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                    </>
                )}
            </Container>
        </>
    );
};

export default Orders;
