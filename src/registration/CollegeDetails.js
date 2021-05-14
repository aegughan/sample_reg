import React, { Component } from "react";
import { Button, Form, Grid, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as yup from "yup";
import LeftPanel from "./LeftPanel";

class CollegeDetails extends Component {
    constructor(props) {
        super(props);
        this.initialValues = {
            institutionName: "",
            batchFromDate: "",
            batchToDate: "",
            course: "",
            domain: "",
        };
        this.schema = yup.object().shape({
            institutionName: yup
                .string()
                .required("Institution name is required"),
            batchFromDate: yup
                .number()
                .typeError("Only number are allowed")
                .required("Enter the batch start year")
                .test(
                    "Length Check",
                    "Maximum allowed character is 4",
                    (value) => {
                        return value && value.toString().length == 4;
                    }
                ),
            batchToDate: yup
                .number()
                .typeError("Only number are allowed")
                .required("Enter the batch end year")
                .test(
                    "Length Check",
                    "Maximum allowed character is 4",
                    (value) => {
                        return value && value.toString().length == 4;
                    }
                )
                .test(
                    "Compare both from and to date",
                    "Batch end year should not be less than batch start year",
                    function (value) {
                        return value && value > this.parent.batchFromDate;
                    }
                ),
            course: yup.string().required("Course is required"),
            domain: yup.string().required("Domain is required"),
        });
    }

    submitCollegeDetails = (values) => {
        console.log("values", values);
        // Send the values to the backend and create the user and update the current progress as CollegeDetails
        const { onCurrentProgressChange } = this.props;
        onCurrentProgressChange("UserCredentials");
    };

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <LeftPanel
                            heading="Hi Erlich!"
                            subHeading="please enter your college deatils"
                        />
                    </Grid.Column>
                    <Grid.Column width={9} className="welcome_container">
                        <Formik
                            initialValues={this.initialValues}
                            validationSchema={this.schema}
                            onSubmit={this.submitCollegeDetails}
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
                                            name="institutionName"
                                            id="institutionName"
                                            className="mt35"
                                            label="Name of institution"
                                            type="text"
                                            value={values.institutionName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={
                                                touched.institutionName &&
                                                errors.institutionName
                                            }
                                        />
                                        <Form.Group className="">
                                            <Form.Field
                                                fluid
                                                control={Input}
                                                name="batchFromDate"
                                                id="batchFromDate"
                                                label="Batch"
                                                type="text"
                                                className="batch_date"
                                                value={values.batchFromDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={
                                                    touched.batchFromDate &&
                                                    errors.batchFromDate
                                                }
                                                icon={{
                                                    name: "calendar alternate outline",
                                                    color: "blue",
                                                }}
                                            />
                                            <p style={{ margin: "30px 10px" }}>
                                                to
                                            </p>
                                            <Form.Field
                                                fluid
                                                control={Input}
                                                name="batchToDate"
                                                id="batchToDate"
                                                label="&nbsp;"
                                                type="text"
                                                className="batch_date"
                                                value={values.batchToDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={
                                                    touched.batchToDate &&
                                                    errors.batchToDate
                                                }
                                                icon={{
                                                    name: "calendar alternate outline",
                                                    color: "blue",
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Field
                                            fluid
                                            control={Input}
                                            name="course"
                                            id="course"
                                            label="Course"
                                            type="text"
                                            value={values.course}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={
                                                touched.course && errors.course
                                            }
                                        />
                                        <Form.Field
                                            fluid
                                            control={Input}
                                            name="domain"
                                            id="domain"
                                            label="Domain"
                                            type="text"
                                            value={values.domain}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={
                                                touched.domain && errors.domain
                                            }
                                        />
                                        <Button className="mt10" type="submit">
                                            Next
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

export default CollegeDetails;
