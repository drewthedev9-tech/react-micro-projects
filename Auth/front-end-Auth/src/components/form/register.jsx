import React, { Component } from "react";
// import ParentForm from "./form.jsx"
 import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
// imoprt all the methods in the userService object below
import {register} from "../services/userService";


const initialstate = { 
    
   }


class Register extends Component{

state={
  username:'',
  email:'',
  password:'',
  emailError: '',
  passwordError:'',
  usernameError:'',
  userError: ''
    
};

handleChange=(event)=>{
  console.log(event.target.value)
this.setState({
  [event.target.name]:event.target.value
})
// // testinng to see if state is updated
// console.log( "state" + this.state )

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


 //  set the state from the validation- code reads:
//  if any of the variables above are true set the state with the following
// varibles.
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

  doSubmit =async()=>{
    console.log(this.state)
    try{
      // send the updated state through.
      // also get the response
     const response = await register(this.state)
      //  testing the response from api to get the jwt from API.
      console.log(response.data)
    //  storing the JWT into storage then we can use to log in up registration.
    // use bracke notation to get x-auth-token
    localStorage.setItem('token', response.headers['x-auth-token']);
    //  redirect to home page - old way
    // this.props.history.push('/');
    // full application reload.
    window.location ='/';
    }
    catch(ex){
      if (ex.response && ex.response.status === 400);
            // clone the errors object
            const errors = "User already exists or an error has occured";
            
            // then call the new state
            this.setState({userError: errors });
    }
   
}
 
  render() {
    const {userError, usernameError, emailError,passwordError} = this.state
    return (
      <div>
        <h1>Sign up</h1>

        <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        name="username"
        onChange={this.handleChange}
        type="text" 
        placeholder="Enter Username" 
        />
       
      </Form.Group> 
      {usernameError ? <div className="alert alert-danger">{usernameError}</div> : null }
      {userError ? <div className="alert alert-danger">{userError}</div> : null }
    
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
        <Form.Control 
        name="email"
        onChange={this.handleChange}
        type="text" 
        placeholder="Enter email" 
        />
      </Form.Group>
      {emailError ? <div className="alert alert-danger">{usernameError}</div> : null }

      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
        <Form.Control 
        name="password"
        onChange={this.handleChange}
        type="password" 
        placeholder=" Enter Password" 
        />
      </Form.Group>
    
      {passwordError ? <div className="alert alert-danger">{passwordError}</div> : null }
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    );
  }
}

export default Register;
