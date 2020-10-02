import React, { Component } from 'react';

class Form extends Component {
    state = { 
        name: '',
        age:'',
        email:''
     }

     handleName=e=>{
         console.log(e.target.value)
         this.setState({
             name: e.target.value
         })
     }

     handleAge=e=>{
        console.log(e.target.value)
        this.setState({
            age: e.target.value
        })
    }
    handleEmail=e=>{
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }
   ren
    render() { 
        const {handleName, handleEmail, handleAge} = this;
        const email = this.state.age >= 14 ? <label> Email: <input onChange={handleEmail}/></label>  : null
        return ( 
            <div>
            <label>
            Name:
            <input onChange={handleName}/>
            </label>
            <label>
            Age:
            <input onChange={handleAge}
            input="number"
            />
            </label> 
           {email}
            </div>
            
           
         );
    }
}
 
export default Form;