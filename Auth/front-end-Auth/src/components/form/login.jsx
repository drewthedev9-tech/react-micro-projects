import React, { Component } from 'react';
import {login} from '../services/authService';
import {Form} from 'react-bootstrap';
import{Button} from 'react-bootstrap';


const initialstate = { 
    
}


class LoginForm extends Component{

  state= { 
    username:'',
    email:'',
    password:'',
    emailError: '',
    passwordError:'',
    usernameError:'',
    loginError: ''
  }
    handleChange=(event)=>{
        console.log(event.target.value)
      this.setState({
        [event.target.name]:event.target.value
      })
      // testinng to see if state is updated
      console.log( "state" + this.state)
  
     }

     validate=()=>{
        let emailError = "";
        let passwordError = "";
        let usernameError ='';
   
       // if email is not empty  email validation
        if(!this.state.email){
          emailError = "email input error! cannot be blank";
        }
   
        if(!this.state.password)
       //  must match against database and API.
        passwordError = "password cannot be blank"

        if(!this.state.username)
        //  must match against database and API.
         usernameError = "username cannot be blank"
   
   
       //  set the state from the validation
       if(emailError || passwordError || usernameError){
         this.setState({
           emailError : emailError,
           passwordError: passwordError,
           usernameError: usernameError
         })
         return false
       }
       return true;
      }  


  handleSubmit= e =>{
    // prevent full page reload
    e.preventDefault();
    const isValid = this.validate();
    if(isValid)
    // return state to original
      this.setState({
        initialstate : initialstate
      })
      this.doSubmit();
  }
 

  doSubmit=async()=>{
    try{
        // from authService.js
     await login(
      this.state.email,
      this.state.password
     )

    }catch(ex){

    }
  
  }
  render() { 
    const {emailError, passwordError} = this.state
    return (
      <div>
      <h1>Login</h1>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        name="email"
        onChange={this.handleChange}
        type="text" 
        placeholder="Enter email address" 
        />
       
      </Form.Group> 
     
      {this.state.emailError ? <div className="alert alert-danger">{emailError}</div> : null }
    
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
        <Form.Control 
        name="password"
        onChange={this.handleChange}
        type="password" 
        placeholder="Password" 
        />
      </Form.Group>
    
      {this.state.passwordError ? <div className="alert alert-danger">{passwordError}</div> : null }
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    
     
      );
  }
}
 
export default LoginForm ;