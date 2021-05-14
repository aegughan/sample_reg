import React, { Component } from "react";
import parse from "html-react-parser";
import "../css/registration/leftpanel.css";

class LeftPanel extends Component {
    render() {
        const { heading, subHeading } = this.props;
        return (
            <div className="left_panel">
                <h1>{parse(heading)}</h1>
                {subHeading ? <p className="mt35">{parse(subHeading)}</p> : ""}
            </div>
        );
    }
}

export default LeftPanel;
