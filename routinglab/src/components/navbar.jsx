import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navStyle = () => {
        return isActive ? "text-oragnge-300" : "text-white";
    }



    return (
        <nav className="bg-blue-700 text-white flex   ">

            <h1 className=" "> my appp</h1>
            <NavbarLink to="/"> home </NavbarLink>{'   '}
            <NavbarLink to="/contact"> contact </NavbarLink>{' '}
            <NavbarLink to="/about"> about </NavbarLink>{' '}
            <NavbarLink to="/dashboard"> dashboard    </NavbarLink>{' '}
        </nav>
    );
};

export default Navbar;