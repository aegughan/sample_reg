import React, { Component } from "react";
import { Button, Form, Grid, Icon, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as yup from "yup";
import LeftPanel from "./LeftPanel";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";

class MobileVerification extends Component {
    constructor(props) {
        super(props);
        this.initialValues = {
            mobileNumber: "",
            otp: "",
        };
        this.schema = yup.object().shape({
            mobileNumber: yup
                .number()
                .typeError("Only numbers are allowed")
                .required("Mobilenumber is required"),
            otp: yup
                .number()
                .typeError("Only numbers are allowed")
                .required("Enter the 4 digit OTP sent to your mobilenumber")
                .test("Length Check", "Invalid OTP", (value) => {
                    return value && value.toString().length == 4;
                }),
        });
        this.state = {
            otpSend: false,
            resendOtp: true,
        };
    }

    sendOTP = (values) => {
        // Send the mobilenumber to backend to send the OTP to the particular mobilenumber
        toast({
            title: "Enter the 4 digit OTP sent to your mobilenumber",
            time: 5000,
        });
        this.setState({
            otpSend: true,
            resendOtp: true,
        });
        setTimeout(() => {
            this.setState({
                resendOtp: false,
            });
        }, 30000);
    };

    verifyMobileNumber = (values) => {
        console.log("values", values);
        // Send the values to the backend to validate the OTP and update the current progress as CollegeDetails
        const { onCurrentProgressChange } = this.props;
        onCurrentProgressChange("RegistrationComplete");
    };  

    render() {
        const { otpSend, resendOtp } = this.state;
        return (
            <>
                <SemanticToastContainer position="top-right" />
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <LeftPanel
                                heading="We are glad to have<br/>you Erlich!"
                                subHeading="your privacy is our concern, please enter your <b>credentials</b>"
                            />
                        </Grid.Column>
                        <Grid.Column width={9} className="welcome_container">
                            <Formik
                                initialValues={this.initialValues}
                                validationSchema={this.schema}
                                onSubmit={this.verifyMobileNumber}
                            >
                                {({
                                    values,
                                    handleChange,
                                    handleBlur,
                                    errors,
                                    touched,
                                    handleSubmit,
                                }) => {
                                    return (
                                        <Form
                                            onSubmit={handleSubmit}
                                            noValidate
                                        >
                                            <Form.Field
                                                fluid
                                                control={Input}
                                                name="mobileNumber"
                                                id="mobileNumber"
                                                className="mt35"
                                                label="Mobile"
                                                value={values.mobileNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={
                                                    touched.mobileNumber &&
                                                    errors.mobileNumber
                                                }
                                            />
                                            <Button
                                                className="mt10"
                                                type="button"
                                                onClick={() =>
                                                    this.sendOTP(values)
                                                }
                                                disabled={otpSend}
                                            >
                                                Done
                                            </Button>
                                            {otpSend ? (
                                                <>
                                                    <Form.Field
                                                        fluid
                                                        control={Input}
                                                        name="otp"
                                                        id="otp"
                                                        className="mt25"
                                                        label="OTP"
                                                        value={values.otp}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={
                                                            touched.otp &&
                                                            errors.otp
                                                        }
                                                    />
                                                    <div
                                                        className={`${
                                                            resendOtp
                                                                ? "disabled"
                                                                : ""
                                                        } text_right`}
                                                        onClick={() =>
                                                            !resendOtp &&
                                                            this.sendOTP(values)
                                                        }
                                                    >
                                                        Resend OTP
                                                    </div>
                                                    <Button
                                                        className="mt10"
                                                        type="submit"
                                                    >
                                                        Submit
                                                    </Button>
                                                </>
                                            ) : (
                                                ""
                                            )}
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default MobileVerification;
