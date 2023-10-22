import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const ForgotPassword = () => {
    return (
        <>
            <BreadCrumb title={"Forgot Password"} />
            <Container class1={"login-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-cart">
                            <h3 className="text-center mb-3">Reset Your Password</h3>
                            <p className="text-center mb-3">we will send an email to reset your password</p>
                            <form className="d-flex flex-column gap-3" action="">
                                <CustomInput type="email" name="email" className="form-control" placeholder="Email"/>
                                <div className="mt-3 d-flex flex-column align-items-center justify-content-center gap-3">
                                    <button type="submit" className="button-small border-0">
                                        Submit
                                    </button>
                                    <Link to={"/login"} className="cancel">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ForgotPassword;
