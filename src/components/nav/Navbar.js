import React, { Component } from "react"
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">My Collection</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">My Wishlist</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar