import React, { Component } from 'react';
import shortid from 'shortid';


class TodoForm extends Component {
    state = { 
        text: ""

     }

     handletext=event=>{
        console.log(event.target.value);
        console.log( "state " + this.state.text)
         this.setState({
             [event.target.name]:event.target.value
         })
        
     }

     handleSubmit=(event)=>{
        //  stop page from refreshing when submitted.
         event.preventDefault();
        //  this is the handed down Addtodo function.
         this.props.onSubmit({
            //  thirdparty shortid function.
             id : shortid.generate(),
             text: this.state.text,
             complete: false,
            

         });
         this.setState({
             text: ""
         })
     }

    render() { 
        const {text} = this.state
        const {handletext, handleSubmit} = this
        return ( 
            <div>
                <form onSubmit={handleSubmit}>
                <input
                onChange={handletext}
                name="text"
                value={text}
                placeholder="todos.."
                />
                <button onClick={handleSubmit}>add todo</button>
                </form>
           
            </div>
         );
    }
}
 
export default TodoForm;