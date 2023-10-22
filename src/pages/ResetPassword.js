import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const ResetPassword = () => {
    return (
        <>
            <BreadCrumb title={"Reset Password"} />
            <Container class1={"login-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-cart">
                            <h3 className="text-center mb-4">Signup</h3>
                            <form className="d-flex flex-column gap-4" action="">
                                <CustomInput
                                    type="password"
                                    name="newPassword"
                                    className="form-control"
                                    placeholder="New Password"
                                />
                                <CustomInput
                                    type="password"
                                    name="confPassword"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                />
                                <div className="mt-3 d-flex align-items-center justify-content-center gap-3">
                                    <button type="submit" className="button-small border-0">
                                        Ok
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

export default ResetPassword;
