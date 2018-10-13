import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './topNavbar.css';

type Props = {};

class TopNavbar extends Component<Props> {
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
