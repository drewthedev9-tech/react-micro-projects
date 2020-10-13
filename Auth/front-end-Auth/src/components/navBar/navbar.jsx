import React from "react";
import {Link} from "react-router-dom";
 import SkullPic from "../images/skull.png"
import "./navBar.css";
// react bootstrap
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
// import {Form} from "react-bootstrap";
// import {FormControl} from "react-bootstrap";
// import {Button} from "react-bootstrap";






const NavBar = () => {
  return (
<div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand >
  <Link className="navbar-brand" to="/">
    <img 
    className="skull-pic"
    src={SkullPic}
    alt="pic"
    />
  </Link>
 </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </Nav.Link>
      <Nav.Link>
      <Link className="nav-link" to="/login">
          Login
        </Link>
      </Nav.Link>
      <Nav.Link>
      <Link className="nav-link" to="/admin">
          Admin
        </Link>
      </Nav.Link>
      
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


    </div>
   
    
  );
};

export default NavBar;
