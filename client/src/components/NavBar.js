import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <h1>G1's guides to your City</h1>
      <h6><small>We know where you live and how to get there</small></h6>
      <div><Link to = '/' >Home</Link></div>
      <div><Link to ='/user/profile'>Profile</Link></div>
      <div><Link to ='/cities/'>Cities</Link></div>
    </div>
  );
};

export default NavBar;