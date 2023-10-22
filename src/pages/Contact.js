import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillHome } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Contact = () => {
    return (
        <>
            <BreadCrumb title={"Contact"} />
            <Container class1={"contact-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <iframe
                            title="Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7132.896512676408!2d105.78957924007923!3d21.018740821233045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab76765b95eb%3A0x79cbbcb5d702e777!2sFast%20Marketing!5e0!3m2!1svi!2s!4v1696439807953!5m2!1svi!2s"
                            width={"100%"}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div className="contact-title">
                                <h3>Contact</h3>
                                <form className="d-flex flex-column gap-4" action="">
                                    <CustomInput type="text" className="form-control" placeholder="Name" />
                                    <CustomInput type="email" className="form-control" placeholder="E-mail"/>
                                    <CustomInput type="tel" className="form-control" placeholder="Mobile number"/>
                                    <div>
                                        <textarea
                                            name=""
                                            id=""
                                            className="w-100 form-control"
                                            rows={4}
                                            cols={30}
                                            placeholder="Comments"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button className="button-small border-0">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="contact-title">
                                <h3>Get in touch with us</h3>
                                <div>
                                    <ul className="fs-4">
                                        <li className="d-flex align-items-center mb-3 gap-5">
                                            <AiFillHome className="info-icon" />
                                            <address>52/255 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà Nội</address>
                                        </li>
                                        <li className="d-flex align-items-center mb-3 gap-5">
                                            <BiSolidPhoneCall className="info-icon" />
                                            <a href="tel:">0867604223</a>
                                        </li>
                                        <li className="d-flex align-items-center mb-3 gap-5">
                                            <MdEmail className="info-icon" />
                                            <a href="mailto:Nguyenkimdat13092003@gmail.com">
                                                Nguyenkimdat13092003@gmail.com
                                            </a>
                                        </li>
                                        <li className="d-flex align-items-center mb-3 gap-5">
                                            <FaInfoCircle className="info-icon" />
                                            <p>Monday - Friday - 10 AM - 8 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
