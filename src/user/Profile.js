import React, { Component } from "react";
import { Card, Icon, Progress } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Profile extends Component {
    constructor(props) {
        super(props);
        // This state will be retrieved from the backend
        this.state = {
            name: "Elrich",
            location: "Chennai, India",
            role: "Founder, CEO",
            company: "Aviato",
            batchId: "CV2012",
            completionPercent: 47,
        };
    }

    render() {
        const { name, location, role, company, batchId, completionPercent } =
            this.state;
        return (
            <Card fluid className="profile_card">
                <Card.Content className="profile_card_content">
                    <Link to="/uploadphoto">
                        <img className="profile_img" src="/instagram.jpeg" />
                    </Link>
                    <div className="profile_card_div">
                        <h1>{name}</h1>
                        <p>
                            <span>
                                <Icon
                                    name="map marker alternate"
                                    color="blue"
                                />
                            </span>
                            <span>{location}</span>
                        </p>
                        <p>
                            <span>{role}</span> at{" "}
                            <span>
                                <b>{company}</b>
                            </span>
                        </p>
                        <p>
                            <span>Batch ID</span>&nbsp;&nbsp;
                            <span>{batchId}</span>
                        </p>
                        <p className="profile_completion">
                            <span>Profile Completion</span>&nbsp;&nbsp;
                            <span className="progress_span">
                                <Progress
                                    percent={completionPercent}
                                    size="small"
                                    progress
                                    color="blue"
                                />
                            </span>
                            <span>&nbsp;</span>
                        </p>
                        <div className="profile_link_icon">
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
                    </div>
                </Card.Content>
            </Card>
        );
    }
}

export default Profile;
