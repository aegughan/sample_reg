import React, { Component } from "react";
import CollegeDetails from "./CollegeDetails";
import MobileVerification from "./MobileVerification";
import RegistrationComplete from "./RegistrationComplete";
import UserCredentials from "./UserCredentials";
import Welcome from "./Welcome";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProgress: "Welcome",
        };
    }

    onCurrentProgressChange = (currentProgress) => {
        this.setState({
            currentProgress,
        });
    };

    render() {
        const { currentProgress } = this.state;
        return (
            <div>
                {currentProgress === "Welcome" ? (
                    <Welcome
                        onCurrentProgressChange={this.onCurrentProgressChange}
                    />
                ) : (
                    <></>
                )}
                {currentProgress === "CollegeDetails" ? (
                    <CollegeDetails
                        onCurrentProgressChange={this.onCurrentProgressChange}
                    />
                ) : (
                    <></>
                )}
                {currentProgress === "UserCredentials" ? (
                    <UserCredentials
                        onCurrentProgressChange={this.onCurrentProgressChange}
                    />
                ) : (
                    <></>
                )}
                {currentProgress === "MobileVerification" ? (
                    <MobileVerification
                        onCurrentProgressChange={this.onCurrentProgressChange}
                    />
                ) : (
                    <></>
                )}
                {currentProgress === "RegistrationComplete" ? (
                    <RegistrationComplete
                        onCurrentProgressChange={this.onCurrentProgressChange}
                    />
                ) : (
                    <></>
                )}
            </div>
        );
    }
}

export default Registration;
