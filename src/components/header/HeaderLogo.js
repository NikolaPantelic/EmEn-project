import React, {Component} from "react";
//import ReactDOM from "react-dom";
// import { HashRouter, Switch, Route, Link, NavLink } from "react-router-dom";


class HeaderLogo extends Component {
    render() {
        return (
            <>
                <div className="header_logo">
                    <div className="header_logo_img"></div>
                    <h1 className="header_logo_text">Hostel</h1>
                    <h3 className="header_logo_text1">Robakowo</h3>
                </div>
            </>
        )
    }
}

export default HeaderLogo;
