import React from "react";
import {Link} from "react-router-dom";
 import SkullPic from "../images/skull.png"
import "./navBar.css";
// react bootstrap
import {Navbar} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";






const NavBar = () => {
  return (
    <div>
      

 

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
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
        <Link className="nav-link" to="/products">
          Products
        </Link>
      </Nav.Link>
      <Nav.Link>
      <Link className="nav-link" to="/posts">
          Posts
        </Link>
      </Nav.Link>
      <Nav.Link>
      <Link className="nav-link" to="/admin">
          Admin
        </Link>
      </Nav.Link>
      
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


    </div>
   
    
  );
};

export default NavBar;
