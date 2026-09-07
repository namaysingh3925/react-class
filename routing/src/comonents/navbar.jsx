import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us </Link>
            </nav>
        </div>
    )
}

export default Navbar