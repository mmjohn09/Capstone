import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'


class Navbar extends Component {

  render(){

    return (
      <header>
        {/* <h1 className="site-title">Super Shelf<br /></h1> */}
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/collection">My Collection</Link></li>
            <li><Link className="nav-link" to="/wishlist">My Wishlist</Link></li>
            {/* <li><Link className="nav-link" to="/messages">Messages</Link></li> */}
            <li><Link className="nav-link" to="/search">Search</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;