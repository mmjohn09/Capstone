import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className='home'>
          <div><Link className='nav-home' to='/'>Comic Nook</Link></div>
          <div className='navbar'>
            <ul className='container'>
              <li><Link className='nav-link' to='/collection'>My Collection</Link></li>
              <li><Link className='nav-link' to='/wishlist'>My Wishlist</Link></li>
              <li><Link className='nav-link' to='/search'>Search</Link></li>
              <li><Link className='nav-link' to='/welcome'><button className='logout-btn' onClick={() => sessionStorage.clear()}>Log Out</button></Link></li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;

