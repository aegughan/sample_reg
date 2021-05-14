import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ProfessionalDetails from "./ProfessionalDetails";
import Profile from "./Profile";
import "../css/user/profile.css";

class Home extends Component {
    render() {
        return (
            <Grid className="home_container">
                <Grid.Row>
                    <Grid.Column>
                        <Profile />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <ProfessionalDetails />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Home;
