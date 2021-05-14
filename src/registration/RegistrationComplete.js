import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import LeftPanel from "./LeftPanel";
import { Link } from "react-router-dom";

class RegistrationComplete extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <LeftPanel heading="We are glad to have<br/>you Erlich!" />
                    </Grid.Column>
                    <Grid.Column width={9} className="welcome_container mt35">
                        <h1>Thank you!</h1>
                        <p>We will get back to you shortly</p>
                        <Link to="/login">Back to Login &gt; </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default RegistrationComplete;
