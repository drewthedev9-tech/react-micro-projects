import React from 'react';
import ParentForm from "./form"
import { Component } from 'react';
import {Form} from 'react-bootstrap';
import{Button} from 'react-bootstrap';




class LoginForm extends ParentForm{

  // will need a seprate state for later.
  state={}

  doSubmit=()=>{
       // call the server
    console.log("calling the server");
  }
  render() { 
    const {emailError} = this.state
    return (
      <div>
      <h1>Login</h1>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        name="email"
        onChange={this.handleChange}
        type="email" 
        placeholder="Enter email"/>
       
      </Form.Group> 
     
      {this.state.emailError ? <div className="alert alert-danger">{emailError}</div> : null }
    
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    
     
      );
  }
}
 
export default LoginForm ;