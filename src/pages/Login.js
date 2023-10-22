import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Login = () => {
    return (
        <>
            <BreadCrumb title={"Login"} />
            <Container class1={"login-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-cart">
                            <h3 className="text-center mb-4">Login</h3>
                            <form className="d-flex flex-column gap-3" action="">
                                <CustomInput type="email" name="email" className="form-control" placeholder="Email" />
                                <CustomInput
                                    type="password"
                                    name="password"
                                    className="form-control mt-3"
                                    placeholder="Password"
                                />
                                <Link to={"/forgot-password"} className="forgot-password">
                                    Forgot Password
                                </Link>
                                <div className="mt-3 d-flex align-items-center justify-content-center gap-3">
                                    <button type="submit" className="button-small border-0">
                                        Login
                                    </button>
                                    <Link to={"/signup"} className="button-small flip-button-color">
                                        Signup
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

export default Login;
