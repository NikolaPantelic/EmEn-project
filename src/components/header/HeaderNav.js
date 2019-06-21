import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class HeaderNav extends Component{
    render() {
        return(
             <ul className="header_nav">
                 <li><NavLink className="header_nav" exact to="/">Page</NavLink></li>
                 <li><NavLink className="header_nav" to="/rooms">Rooms</NavLink></li>
                 <li><NavLink className="header_nav" to="/regulamin">Regulamin</NavLink></li>
                 <li><NavLink className="header_nav" to="/contact">Contact</NavLink></li>
             </ul>
        )
    }
}
export default HeaderNav;