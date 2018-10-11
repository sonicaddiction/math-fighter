import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class TopNavbar extends Component {
  render() {
    return (
        <ul className="navbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    );
  }
}

export default TopNavbar;
