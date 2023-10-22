import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <>
            <div className="blog-cart">
                <div className="cart-img">
                    <img src="/images/blog-1.jpg" className="img-fluid" alt="blog" />
                    <div className="blog-content">
                        <p className="date">1 Dec, 2023</p>
                        <h5 className="title">A beautiful sunday morning renaissance</h5>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectur adipiscing elit. Atque quaerat cacusamus officia vel
                            temporibus est vitae ad consequatur{" "}
                        </p>
                        <Link className="button" to={"/blog/:id"}>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
