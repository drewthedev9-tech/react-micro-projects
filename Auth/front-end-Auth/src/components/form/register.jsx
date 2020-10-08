import React, { Component } from "react";
import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap';


const initialstate = { 
  email: '',
  password:'',
   emailError: '',
   passwordError:''
    
   }

class Register extends Component {
  
  state=initialstate;

   handleChange=(event)=>{
      console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
    // testinng to see if state is updated
    console.log( "state" + this.state.email)

   }

   validate=()=>{
     let emailError = "";
     let passwordError = "";

    // if email is not empty  email validation
     if(!this.state.email){
       emailError = "email input error! cannot be blank";
     }

     if(this.state.password < 5)
    //  must match against database and API.
     passwordError = "password must be entered"


    //  set the state from the validation
    if(emailError || passwordError){
      this.setState({
        emailError : emailError,
        passwordError: passwordError
      })
      return false
    }
    return true;
   }
  render() {
    return (
      <div>
        <h1>Sign up</h1>

        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
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

export default Register;
