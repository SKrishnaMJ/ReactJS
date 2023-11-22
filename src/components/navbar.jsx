import React, { Component } from 'react';

//Stateless Functional Component (can use sfc)
const NavBar = ({totalCounters}) => {
    return (<nav className ="navbar bg-body-tertiary">
        <div className ="container-fluid">
          <a className ="navbar-brand" href="#">Navbar <span className='badge badge-pill badge-secondary'>{totalCounters}</span></a>
        </div>
      </nav>);
};
 
export default NavBar;