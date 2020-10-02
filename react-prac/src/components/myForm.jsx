import React, { Component } from 'react';

class MyForm extends Component {
    state = { 
        name: "Plese enter name",
        favPet: "the dog",
        remeberMe: false,
        title:""
     }
    //  making the ipout field in react a controled field
    // meaning we are updating the state and adding to it.
     handleChange=(event)=>{
         console.log(event.target.value)
         const isCheckbox = event.target.type==="checbox";
        //  updating the string value fildname not the state.
         this.setState({
            //  reffering to the name in the html.
             [event.target.name]:isCheckbox 
            ? event.target.checked
            // referring to teh value in the input.
            : event.target.value
        });
     }

    handleSubmit=event=>{
        event.preventDefault();
       console.log(this.state)
    }
    render() { 
        const {handleChange, handleSubmit} = this;
        const {name,favPet} = this.state
        return ( 
            <form onSubmit={handleSubmit}>
                <input
                name="name"
                value={name}
                onChange={handleChange}
                />
                <textarea
                name="favPet"
                value={favPet}
                onChange={handleChange}
                />
                <input
                name="rememberMe"
                type="checkbox"
                onChange={handleChange}
                />
                <div>
                    <select 

                    onChange={handleChange}
                    >
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                    <option>Mr</option>
                    </select>
                </div>
                <button type="submit">
                    Submit
                </button>
                

            </form>

         );
    }
}
 
export default MyForm;