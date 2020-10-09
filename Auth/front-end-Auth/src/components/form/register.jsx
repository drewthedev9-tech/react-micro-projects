import React, { Component } from "react";
// import ParentForm from "./form.jsx"
// import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
// imoprt all the methods in the userService object below
import {register} from "../services/userService";

const initialstate = { 
  
  // usernameError:'',
  // emailError: '',
  // passwordError:'',

    
   }


class Register extends Component{

state={
  username:'',
  email:'',
  password:'',
    
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

  doSubmit =async()=>{
    const {username,email,password} = this.state
    console.log(this.state)
     await register(this.state)
   
}
 
  render() {
    const {emailError, passwordError,usernameError} = this.state
    return (
      <div>
        <h1>Sign up</h1>

       <form onSubmit={this.handleSubmit}>
        <input
        name="username"
        placeholder="username"
        onChange={this.handleChange}
        />
        <input
        name="email"
        placeholder="email"
        onChange={this.handleChange}
        />
        <input
        name="password"
        placeholder="password"
        type="password"
        onChange={this.handleChange}
        />
        <Button variant="primary" type="submit">
        Submit
      </Button>
       </form>
       
       

    
      </div>
    );
  }
}

export default Register;
