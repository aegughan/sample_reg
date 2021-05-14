import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class UploadPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            profileImage: URL.createObjectURL(event.target.files[0]),
        });
    };
    render() {
        const { profileImage } = this.state;
        return (
            <div className="upload_container">
                <div className="upload_heading center">
                    <h1>Profile Picture</h1>
                </div>
                <div className="upload_image center">
                    <input
                        type="file"
                        className="hiddenFile"
                        accept="image/*"
                        onChange={this.handleChange}
                    />
                    <img
                        className="profile_image"
                        src={`${profileImage || "/avatar.png"}`}
                        alt="avatar"
                    />
                </div>
                <div className="upload_btn center">
                    <Button>Upload</Button>
                </div>
            </div>
        );
    }
}

export default UploadPhoto;
