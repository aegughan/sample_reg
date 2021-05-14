import React, { Component } from "react";
import { Card, Cardu, Grid, Icon, Label } from "semantic-ui-react";

class ProfessionalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            professionalDetailsList: [
                {
                    companyName: "Aviato",
                    role: "Senior Developer",
                    formDate: "June 2015",
                    toDate: "Present",
                    skillList: ["Python", "UX Designer"],
                    summary:
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin",
                },
                {
                    companyName: "Aviato",
                    role: "Senior Developer",
                    formDate: "June 2015",
                    toDate: "Present",
                    skillList: ["Python", "UX Designer"],
                    summary:
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin",
                },
            ],
        };
    }

    render() {
        const { professionalDetailsList } = this.state;
        return (
            <Card fluid className="profile_card">
                <Card.Content className="profile_card_content">
                    <Card.Header className="card_header">
                        <Icon name="briefcase" color="blue" size="big" />
                        <span>Professional Details</span>
                    </Card.Header>
                </Card.Content>
                <Card.Content className="pro_card_content">
                    <Grid>
                        {professionalDetailsList.map(
                            (professionalDetailsObj, index) => {
                                return (
                                    <Grid.Row
                                        key={`${
                                            professionalDetailsObj.companyName
                                        }_${index + 1}`}
                                    >
                                        <div className="pro_icon">
                                            <Icon
                                                name="circle"
                                                color="blue"
                                                size="large"
                                            />
                                        </div>
                                        <div className="pro_desc">
                                            <h2>
                                                {
                                                    professionalDetailsObj.companyName
                                                }
                                            </h2>
                                            <p>{professionalDetailsObj.role}</p>
                                            <p>
                                                {
                                                    professionalDetailsObj.formDate
                                                }{" "}
                                                to{" "}
                                                {professionalDetailsObj.toDate}
                                            </p>
                                            <p className="mt15">
                                                {professionalDetailsObj.skillList.map(
                                                    (skillName, idx) => (
                                                        <Label
                                                            key={`${skillName}_${idx}`}
                                                            className="skill_label"
                                                        >
                                                            {skillName}
                                                        </Label>
                                                    )
                                                )}
                                            </p>
                                            <p>
                                                {professionalDetailsObj.summary}
                                            </p>
                                        </div>
                                    </Grid.Row>
                                );
                            }
                        )}
                    </Grid>
                </Card.Content>
            </Card>
        );
    }
}

export default ProfessionalDetails;
