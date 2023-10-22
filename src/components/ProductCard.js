import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
    const {grid} = props
    let location = useLocation();  
    return (
        <>
            <div className={`${location.pathname === '/store' ? `col-${grid}` :'col-3' }`}>
                <Link to={"/product/:id"} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button>
                            <img src="/images/wish.svg" alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-img">
                        <img src="/images/watch.jpg" className="img-fluid" alt="product image" />
                        <img src="/images/watch-1.jpg" className="img-fluid" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">kids headphones bulk 10 pack multi color for students</h5>
                        <ReactStars count={5} size={24} value={3} activeColor="#ffd700" edit={false} />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos docimus quiblandditiis prasesntium voluptatum deleniti atque 
                        </p>
                        <p className="price">$5555</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-5">
                            <button>
                                <img src="/images/prodcompare.svg" alt="compareCart" />
                            </button>
                            <button >
                                <img src="/images/view.svg" alt="viewCart" />
                            </button>
                            <button>
                                <img src="/images/add-cart.svg" alt="addCart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
