import React, { Component } from "react";
import { Button, Form, Grid, Icon, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as yup from "yup";
import LeftPanel from "./LeftPanel";

class UserCredentials extends Component {
    constructor(props) {
        super(props);
        this.initialValues = {
            username: "",
            password: "",
            confirmpassword: "",
        };
        this.schema = yup.object().shape({
            username: yup.string().required("Username is required"),
            password: yup.string().required("Password is required"),
            confirmpassword: yup
                .string()
                .required("Confirm password is required")
                .test(
                    "Password match check",
                    "Password does not match",
                    function (value) {
                        return value && this.parent.password === value;
                    }
                ),
        });
        this.state = {
            showPassword: false,
            showConfirmPassword: false,
        };
    }

    submitUserCredentials = (values) => {
        console.log("values", values);
        // Send the values to the backend and create the user credentials and update the current progress as CollegeDetails
        const { onCurrentProgressChange } = this.props;
        onCurrentProgressChange("MobileVerification");
    };

    render() {
        const { showPassword, showConfirmPassword } = this.state;
        return (
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
                            onSubmit={this.submitUserCredentials}
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
                                    <Form onSubmit={handleSubmit} noValidate>
                                        <Form.Field
                                            fluid
                                            control={Input}
                                            name="username"
                                            id="username"
                                            className="mt35"
                                            label="Username"
                                            type="text"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={
                                                touched.username &&
                                                errors.username
                                            }
                                        />
                                        <Form.Field
                                            fluid
                                            control={Input}
                                            name="password"
                                            id="password"
                                            label="Password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={
                                                touched.password &&
                                                errors.password
                                            }
                                        />
                                        <span
                                            className="eye_icon"
                                            onClick={() => {
                                                this.setState({
                                                    showPassword: !showPassword,
                                                });
                                            }}
                                        >
                                            <Icon
                                                name={
                                                    showPassword
                                                        ? "eye slash"
                                                        : "eye"
                                                }
                                            />
                                        </span>
                                        <Form.Field
                                            fluid
                                            control={Input}
                                            name="confirmpassword"
                                            id="confirmpassword"
                                            label="Confirm Password"
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={values.confirmpassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={
                                                touched.confirmpassword &&
                                                errors.confirmpassword
                                            }
                                        />
                                        <span
                                            className="eye_icon"
                                            onClick={() => {
                                                this.setState({
                                                    showConfirmPassword:
                                                        !showConfirmPassword,
                                                });
                                            }}
                                        >
                                            <Icon
                                                name={
                                                    showConfirmPassword
                                                        ? "eye slash"
                                                        : "eye"
                                                }
                                            />
                                        </span>
                                        <Button className="mt10" type="submit">
                                            Sign In
                                        </Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default UserCredentials;
