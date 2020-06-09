import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className = 'indigo'>
      <div>
        <span> Navbar </span>
        <ul className = 'right'>
          <li><Link to = '/'> Home </Link> </li>
          <li><Link to = '/about'> About Us </Link> </li>
          <li><Link to = '/contact'> Contact Us </Link> </li>
          <li><Link to = '/todo'> To Do List </Link> </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;