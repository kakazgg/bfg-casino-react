import axios from 'axios';

import { sessionService } from 'redux-react-session';

export const loginUser = (credentials, navigate, setFieldError, setSubmitting) => {
    // make checks and get some data

    return () => {


        axios.post("https://lovely-mammoth-cave-12960.herokuapp.com/user/signin",
            credentials,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then((response) => {
            const { data } = response;

            if (data.status === "FAILED") {
                const { message } = data;

                //check for specific error
                if (message.includes("credentials")) {
                    setFieldError("email", message);
                    setFieldError("password", message);
                } else if (message.includes("password")) {
                    setFieldError("password", message);
                }

            } else if (data.status === "SUCCESS") {
                const userData = data.data[0];

                const token = userData._id;

                sessionService.saveSession(token).then(() => {
                    sessionService.saveUser(userData).then(() => {
                        navigate("/dashboard");
                        window.location.reload();

                    }).catch(err => console.error(err))
                }).catch(err => console.error(err))

            }

            //complete submission
            setSubmitting(false);

        }).catch(err => console.error(err))

    }
};

export const signupUser = (credentials, navigate, setFieldError, setSubmitting) => {
    return (dispatch) => {
        axios.post("https://lovely-mammoth-cave-12960.herokuapp.com/user/signup",
            credentials,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then((response) => {
            const { data } = response;

            if (data.status === "FAILED") {
                const { message } = data;

                // checking for specific error
                if (message.includes("name")) {
                    setFieldError("name", message);
                } else if (message.includes("email")) {
                    setFieldError("email", message);
                } else if (message.includes("password")) {
                    setFieldError("password", message);
                }

                // complete submission
                setSubmitting(false);


            } else if (data.status === "SUCCESS") {
                //login user after successful signup
                const { email, password } = credentials;

                dispatch(loginUser({ email, password }, navigate, setFieldError, setSubmitting)
                );

            }

        }).catch(err => console.error(err));

    }
};

export const logoutUser = (navigate) => {
    console.log(">> yes, let me logout <<");
    return () => {
        sessionService.deleteSession().then(() => {
            sessionService.deleteUser().then(() => {
                navigate('/');
                window.location.reload();
            });
        });
    }
};