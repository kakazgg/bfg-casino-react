// Styles
import {
    colors,
} from './Styles';

// Formik
import { Formik, Form } from 'formik';
import { TextInput } from "./FormLib";
import * as Yup from 'yup';

//loader
import { ThreeDots } from 'react-loader-spinner';

// auth & redux
import {connect} from 'react-redux';
import {loginUser, signupUser} from "./../auth/actions/userActions";
import {useNavigate} from "react-router-dom";

const LoginModal = ({loginUser, signupUser}) => {
    const history = useNavigate();
    return (
        <div class="log-reg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="modal fade" id="loginMod">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header justify-content-center">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <ul class="nav log-reg-btn justify-content-around">
                                        <li class="bottom-area" role="presentation">
                                            <button class="nav-link" id="regArea-tab" data-bs-toggle="tab"
                                                data-bs-target="#regArea" type="button" role="tab" aria-controls="regArea"
                                                aria-selected="false">
                                                SIGN UP
                                            </button>
                                        </li>
                                        <li class="bottom-area" role="presentation">
                                            <button class="nav-link active" id="loginArea-tab" data-bs-toggle="tab"
                                                data-bs-target="#loginArea" type="button" role="tab"
                                                aria-controls="loginArea" aria-selected="true">
                                                LOGIN
                                            </button>
                                        </li>
                                    </ul>


                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="loginArea" role="tabpanel"
                                            aria-labelledby="loginArea-tab">
                                            <div class="login-reg-content">
                                                <div class="modal-body">
                                                    <div class="head-area">
                                                        <h6 class="title">Login</h6>
                                                    </div>


                                                    <div class="form-area">
                                                        <Formik
                                                            initialValues={{
                                                                email: "",
                                                                password: "",
                                                                repeatPassword: "",
                                                                name: ""
                                                            }}
                                                            validationSchema={
                                                                Yup.object({
                                                                    email: Yup.string().email("Invalid email address")
                                                                    .required("Required"),
                                                                    password: Yup.string()
                                                                    .min(8, "Password is too short")
                                                                    .max(30, "Password is too long")
                                                                    .required("Required"),
                                                                })}
                                                            onSubmit={(values, { setSubmitting, setFieldError }) => {
                                                                console.log(values);
                                                                loginUser(values, history, setFieldError, setSubmitting);
                                                            }}
                                                            >
                                                            {({ isSubmitting }) => (
                                                                <Form>
                                                                    <div class="row">
                                                                        <div class="col-12">
                                                                            <div class="single-input">
                                                                                <label for="logemail">Email</label>
                                                                                <TextInput
                                                                                    id="logemail"
                                                                                    name="email"
                                                                                    type="text"
                                                                                    label="Email Address"
                                                                                    placeholder="olga1@example.com"
                                                                                />
                                                                            </div>
                                                                            <div class="single-input">
                                                                                <label for="logpassword">Password</label>
                                                                                <TextInput
                                                                                    name="password"
                                                                                    type="password"
                                                                                    label="Password"
                                                                                    placeholder="***********"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <div class="remember-me">
                                                                                <label
                                                                                    class="checkbox-single d-flex align-items-center">
                                                                                    <span class="left-area">
                                                                                        <span class="checkbox-area d-flex">
                                                                                            <input type="checkbox"
                                                                                                checked="checked" />
                                                                                            <span class="checkmark"></span>
                                                                                        </span>
                                                                                        <span
                                                                                            class="item-title d-flex align-items-center">
                                                                                            <span>Remember Me</span>
                                                                                        </span>
                                                                                    </span>
                                                                                </label>
                                                                                <a href="#/"><p className="forgot-password">Forgot Password</p></a>
                                                                            </div>
                                                                        </div>
                                                                        <span class="btn-border w-100">
                                                                            {!isSubmitting && (
                                                                                <button className="cmn-btn w-100" type="submit">Login</button>)}
                                                                            {isSubmitting && (
                                                                                <div className="loading-modal">
                                                                                    <ThreeDots
                                                                                        type="ThreeDots"
                                                                                        color={colors.theme}
                                                                                        height={49}
                                                                                        width={100}
                                                                                    />
                                                                                </div>
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </Form>
                                                            )}
                                                        </Formik>


                                                        <div class="bottom-area text-center">
                                                            <p>Not a member ? <a href="#/"
                                                                class="reg-btn">Register</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="tab-pane fade" id="regArea" role="tabpanel"
                                            aria-labelledby="regArea-tab">
                                            <div class="login-reg-content regMode">
                                                <div class="modal-body">
                                                    <div class="head-area">
                                                        <h6 class="title">Register On The B.F.G's</h6>
                                                    </div>


                                                    <div class="form-area">
                                                        <Formik
                                                            initialValues={{
                                                                email: "",
                                                                password: "",
                                                                repeatPassword: "",
                                                                name: ""
                                                            }}
                                                            validationSchema={
                                                                Yup.object({
                                                                    email: Yup.string().email("Invalid email address")
                                                                    .required("Required"),
                                                                    password: Yup.string()
                                                                    .min(8, "Password is too short")
                                                                    .max(30, "Password is too long")
                                                                    .required("Required"),
                                                                    name: Yup.string().required("Required"),
                                                                    repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must match")
                                                                })}
                                                            onSubmit={(values, { setSubmitting, setFieldError }) => {
                                                                signupUser(values, history, setFieldError, setSubmitting);
                                                            }
                                                            }>
                                                            {({ isSubmitting }) => (
                                                                <Form>
                                                                    <div class="row">
                                                                        <div class="col-12">
                                                                            <div class="single-input">
                                                                                <label for="regemail">Username</label>
                                                                                <TextInput
                                                                                    name="name"
                                                                                    type="text"
                                                                                    label="Full Name"
                                                                                    placeholder="Olga Simpson"
                                                                                />
                                                                            </div>
                                                                            <div class="single-input">
                                                                                <label for="regemail">Email</label>
                                                                                <TextInput
                                                                                    name="email"
                                                                                    type="text"
                                                                                    label="Email Address"
                                                                                    placeholder="olga1@example.com"
                                                                                />
                                                                            </div>
                                                                            <div class="single-input">
                                                                                <label for="regpassword">Password</label>
                                                                                <TextInput
                                                                                    name="password"
                                                                                    type="password"
                                                                                    label="Password"
                                                                                    placeholder="***********"
                                                                                />
                                                                            </div>
                                                                            <div class="single-input">
                                                                                <label for="regpassword">Confirm Password</label>
                                                                                <TextInput
                                                                                    name="repeatPassword"
                                                                                    type="password"
                                                                                    label="Repeat Password"
                                                                                    placeholder="***********"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <span class="btn-border w-100">
                                                                            {!isSubmitting && (
                                                                                <button className="cmn-btn w-100" type="submit">Login</button>)}
                                                                            {isSubmitting && (
                                                                                <div className="loading-modal">
                                                                                    <ThreeDots
                                                                                        type="ThreeDots"
                                                                                        color={colors.theme}
                                                                                        height={49}
                                                                                        width={100}
                                                                                    />
                                                                                </div>
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </Form>
                                                            )}
                                                        </Formik>
                                                    </div>



                                                </div>
                                                <div class="bottom-area text-center">
                                                    <p>Already have an member ? <a href="#/)"
                                                        class="log-btn">Login</a></p>
                                                </div>
                                                <div class="counter-area">
                                                    <div class="single">
                                                        <div class="icon-area">
                                                            <img src="assets/images/icon/signup-counter-icon-1.png"
                                                                alt="icon" />
                                                        </div>
                                                        <div class="text-area">
                                                            <p>25,179k</p>
                                                            <p class="mdr">Bets</p>
                                                        </div>
                                                    </div>
                                                    <div class="single">
                                                        <div class="icon-area">
                                                            <img src="assets/images/icon/signup-counter-icon-2.png"
                                                                alt="icon" />
                                                        </div>
                                                        <div class="text-area">
                                                            <p>6.65 BTC</p>
                                                            <p class="mdr">Total Won</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {loginUser, signupUser})(LoginModal);