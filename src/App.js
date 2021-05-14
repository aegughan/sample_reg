import React, { Component } from "react";
import { Route } from "react-router-dom";
import Registration from "./registration/Registration";
import Home from "./user/Home";
import Login from "./user/Login";
import UploadPhoto from "./user/UploadPhoto";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Registration} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/uploadphoto" component={UploadPhoto} />
            </div>
        );
    }
}

export default App;
