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


// react.fragment needed to treat the elements as one in JSX'
// needed if we are trying t group elemnts into one node elemnet
const NavBar = (props) => {
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
    <Link className="nav-link" to="/admin">
        Admin
      </Link>
    </Nav.Link>
     {/* if user is logged in || otherwords there is no token*/}
     { !props.user && ( 
      <React.Fragment>
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
      </React.Fragment>
      )}
      {/* if user is logged in*/}
      { props.user && ( 
        <React.Fragment>
          <Nav.Link>
          <Link className="nav-link" to="/profile">
          {/* grab name from the decoded JWt in state in app component*/}
            {props.user.name}
          </Link>
        </Nav.Link>
        <Nav.Link>
        <Link className="nav-link" to="/logout">
            Logout
          </Link>
        </Nav.Link>
        </React.Fragment>
        )}
      
     
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


    </div>
   
    
  );
};

export default NavBar;
