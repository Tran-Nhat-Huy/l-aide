import React from "react";
import "./nav.scss";
import logo from "./../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <Link to="/">
                    <img src={logo} alt="Logo" className="nav-logo" />
                </Link>
                <NavLink to="/" activeclassname="active" exact="true">
                    Home
                </NavLink>
                <NavLink to="/document" activeclassname="active">
                    Document
                </NavLink>
                <NavLink to="/download" activeclassname="active">
                    Download
                </NavLink>
                <NavLink to="/contact" activeclassname="active">
                    Contact
                </NavLink>
                <NavLink to="/feedback" activeclassname="active">
                    Feedback
                </NavLink>
                <NavLink to="/login" activeclassname="active">
                    Account
                </NavLink>
            </div>
        );
    }
}

export default Nav;
