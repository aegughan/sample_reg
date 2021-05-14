import React, { Component } from "react";
import { Button, Form, Grid, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as yup from "yup";
import LeftPanel from "./LeftPanel";
import "../css/registration/welcome.css";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.initialValues = {
            name: "",
        };
        this.schema = yup.object().shape({
            name: yup.string().required("Name is required"),
        });
    }

    submitWelcomeDetails = (values) => {
        console.log("values", values);
        // Send the values to the backend and create the user and update the current progress as CollegeDetails
        const { onCurrentProgressChange } = this.props;
        onCurrentProgressChange("CollegeDetails");
    };

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <LeftPanel
                            heading="Hi there!"
                            subHeading="please enter your <b>name</b>"
                        />
                    </Grid.Column>
                    <Grid.Column width={9} className="welcome_container">
                        <h1>Welcome</h1>
                        <p className="mt25">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam
                        </p>
                        <Formik
                            initialValues={this.initialValues}
                            validationSchema={this.schema}
                            onSubmit={this.submitWelcomeDetails}
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
                                            name="name"
                                            id="name"
                                            className="mt35"
                                            label="Enter your name"
                                            type="text"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.name && errors.name}
                                        />
                                        <Button className="mt10" type="submit">
                                            Next
                                        </Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                        <div className="mt35"></div>
                        <hr></hr>
                        <p>or sign up using</p>
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
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Welcome;
