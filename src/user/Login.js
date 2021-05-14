import React, { Component } from "react";
import { Button, Form, Grid, Card, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as yup from "yup";
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.initialValues = {
            username: "",
            password: "",
        };
        this.schema = yup.object().shape({
            username: yup.string().required("Username is required"),
            password: yup.string().required("Password is required"),
        });
        this.state = {
            isValid: false,
        };
    }

    validateLogin = (values) => {
        // Send the values to backend and validate the username and password are correct or not
        this.setState({
            isValid: true,
        });
    };

    render() {
        const { isValid } = this.state;
        return (
            <>
                <Grid>
                    <Grid.Row centered>
                        <Grid.Column width={8}>&nbsp;</Grid.Column>
                        <Grid.Column width={8} className="login_column">
                            <Card fluid className="login_card">
                                <Card.Content>
                                    <h1>Sign in</h1>
                                    <Formik
                                        initialValues={this.initialValues}
                                        validationSchema={this.schema}
                                        onSubmit={this.validateLogin}
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
                                                        name="username"
                                                        id="username"
                                                        placeholder="Username"
                                                        className="mt35"
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
                                                        type="password"
                                                        placeholder="Password"
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={
                                                            touched.password &&
                                                            errors.password
                                                        }
                                                    />
                                                    <Button
                                                        type="submit"
                                                        className="login_btn"
                                                    >
                                                        Log in
                                                    </Button>
                                                </Form>
                                            );
                                        }}
                                    </Formik>
                                    <p className="tc">*Terms and conditions</p>
                                    <p className="hr_p">
                                        <span>or sign in using</span>
                                    </p>
                                    <div className="login_img_div">
                                        <img
                                            src="/facebook.png"
                                            alt="facebook"
                                            className="img_icon mr10"
                                        />
                                        <img
                                            src="/instagram.jpeg"
                                            alt="instagram"
                                            className="img_icon mr10"
                                        />
                                        <img
                                            src="/twitter.jpeg"
                                            alt="twitter"
                                            className="img_icon mr10"
                                        />
                                        <img
                                            src="/linkedin.png"
                                            alt="linkedin"
                                            className="img_icon"
                                        />
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                {isValid ? <Redirect to="/home" /> : ""}
            </>
        );
    }
}

export default Login;
