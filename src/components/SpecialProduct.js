import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
    return (
        <div className="col-4">
            <div className="spacial-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">Havels</h5>
                        <h6 className="title">Samsung Galaxy Note-10+ Mobile phone; Sim</h6>
                        <ReactStars count={5} size={24} value={3} activeColor="#ffd700" edit={false} />
                        <p className="price">
                            <span className="red-p">$100</span>
                            &nbsp;
                            <strike>$6666</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center">
                            <p>
                                <b>5</b>days
                            </p>
                            <div className="d-flex align-items-center gap-3">
                                <span className="badge bg-danger rounded-circle p-3">1</span>:
                                <span className="badge bg-danger rounded-circle p-3">1</span>:
                                <span className="badge bg-danger rounded-circle p-3">1</span>
                            </div>
                        </div>
                        <div className="product-count my-3">
                            <p>product : 5</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <Link className="button-small my-3">Add to card</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;
