import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Signup = () => {
    return (
        <>
            <BreadCrumb title={"Signup"} />
            <Container class1={"login-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-cart">
                            <h3 className="text-center mb-4">Signup</h3>
                            <form className="d-flex flex-column gap-4" action="">
                                <CustomInput
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                                <CustomInput
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                                <CustomInput type="email" name="email" className="form-control" placeholder="Email" />
                                <CustomInput
                                    type="tel"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                />
                                <CustomInput
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <div className="mt-3 d-flex align-items-center justify-content-center gap-3">
                                    <button type="submit" className="button-small border-0">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Signup;
