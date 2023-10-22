import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const SingleBlog = () => {
    return (
        <>
            <BreadCrumb title={"Single Blog"} />
            <Container class1={"blog-wrapper home-wrapper-2 py-5"}>
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-cart">
                            <Link to={"/blog"} className="d-flex align-items-center gap-2 mb-5">
                                <BsFillArrowLeftCircleFill className="fs-4" />
                                Go back to blogs
                            </Link>

                            <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                            <img src="/images/blog-1.jpg" className="img-fluid my-4" alt="" />
                            <p>
                                You are only as good as your last collection , which is an enormous pressure . t think
                                there is something about luxury it's not something people need, but it's what they want
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleBlog;
