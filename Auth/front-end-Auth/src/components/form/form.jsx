import { Component } from 'react';


const initialstate = { 
    username:'',
    password:'',
    name: '',
    usernameError:'',
    emailError: '',
    passwordError:'',

      
     }

class Form extends Component {
  

state=initialstate;
// these methds are reusable and can be used in other 
// forms when created

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

    //   dont need render method because this
    //  is a parent class for form creation.
    // render() { 
    //     return (  );
    // }
}
 
export default Form;