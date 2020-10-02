import React, { Component } from 'react';

const initialState = { 
    name:'',
    age:'',
    email:'',
    password: '',
    nameError:'',
    emailError:'',
    ageError:'',
    passwordError:''
 }

class validationForm extends Component {

    state = initialState;
    

     handleChange=event=>{
         console.log(event.target.value)
         this.setState({
            [event.target.name]:event.target.value 
         })
       
     }

     validate=()=>{
         let nameError ="";
         let emailError ="";
         let passwordError ="";

        // name inout valudation
        // if theres nothing in state
        if (!this.state.name){
        // update name Error
            nameError = "name cannot be blank";
        }


        // email error does not include an @ sign
         if(!this.state.email.includes('@')){
             emailError = "invalid email";
         }

         if(!this.state.password.length < 5){
            passwordError ="passowrd must be longer than 5"
         }

        //  if = emailError || nameError then set state to "invalid email"
         if(emailError || nameError || passwordError){
             this.setState({
                 emailError, nameError, passwordError
            })
            // has errors
             return false;
         }
        // no errors return true.
         return true;
     }

     handleSubmit=event=>{
         event.preventDefault();
         const isValid = this.validate();
         if(isValid){
            console.log(this.state)
            // clearing the form and reseting after submitting.
            this.setState({initialState})
         }
       
     }

    render() { 
        const {age,password, nameError, ageError, passwordError, emailError} = this.state
        const {handleChange, handleSubmit} = this
        const email = age >= 14 ? <label>Email:<input name="email" onChange={handleChange}/></label> : null
        const errorName = nameError ?  <div style ={{color:"red"}}>{nameError}</div> : null
        const errorAge = ageError ?  <div style ={{color:"red"}}>{ageError}</div> : null
        const errorEmail = emailError ?  <div style ={{color:"red"}}>{emailError}</div> : null
        const errorPassword = passwordError ?  <div style ={{color:"red"}}>{passwordError}</div> : null
      
        return ( 
            <form onSubmit={handleSubmit}>
                <input
                name="name"
                placeholder="firstname"
                onChange={handleChange}
                />
               {errorName}
                <input
                name="age"
                placeholder="age"
                onChange={handleChange}
                />
                {errorAge}
                <p>Note only 14 and older will be allowed to input email</p>
               {email}
               {errorEmail}
               <input
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={handleChange}
                />
                {errorPassword}
                <br/>
                <button 
                type="submit"
                >
                Submit Form
                </button>
            </form>
         );
    }
}
 
export default validationForm;