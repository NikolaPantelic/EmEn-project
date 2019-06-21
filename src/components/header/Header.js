import React, {Component} from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
// import ReactDOM from "react-dom";
// import { HashRouter, Switch, Route, Link, NavLink } from "react-router-dom";


class Header extends Component{
    render() {
        return(
            <div className="header main_width">
               <HeaderLogo/>
               <HeaderNav/>
            </div>
        )
    }
}
export default Header;
