// for using JSX needs react library.
import React, { Component } from 'react';



// setting state up ////

class Counter extends Component {
// class with constructor god for passing props to the class inapp.js
// otherwise class field declarartion is fine as well.
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
         }
        }
// calss field declaration is fins as well.
    // state = {  
    //     count : 0
    // }

    // arrow function inherits this key word.
    handleCount=()=>{
        console.log("clicked");
        this.setState({
        // passing in a new value for count.
            count: this.state.count + 1
        })
      
    }

    handleDecrement=()=>{
        this.setState({
            count: this.state.count -1
        })

    }


    render() { 
        const {count} = this.state
        const {handleCount,handleDecrement} = this
    
        return ( 
            <div>
                <h1>{count}</h1>
               
              <button
              onClick={handleCount}
              >
              Increment
              </button>
              <button
              onClick={handleDecrement}
              >
              Decrement
              </button>
            </div>
            
            
           

         );
    }
}
 
export default Counter;