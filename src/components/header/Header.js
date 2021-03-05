import React, { Component } from "react";

import '../../App.css';
// import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto navbar_wrapper">
           <Link to="/Album">Album Order</Link>
           <Link to="/Login">Login</Link>
           <Link to="/Register">Register</Link>
            
          </Nav>
        
        </Navbar>
      </div>
    );
  }
}

export default Header;
