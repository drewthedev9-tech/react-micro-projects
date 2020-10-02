// for using JSX needs react library.
import React, { Component } from 'react';
// with redux 
import {connect} from "react-redux";

class Counter extends Component {

 handleCount=()=>{    
  this.props.dispatch({ type:"INCREMENT"});
 }
 handleDecrement=()=>{
     this.props.dispatch({ type:"DECREMENT"});
}


    render() { 
       
        const {handleCount,handleDecrement, props} = this
    
        return ( 
            <div>
                <h1>{props.count}</h1>
               
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
 
// returns specifics from the reduxStore 
// as props to use in component
const mapStateToProps = state=>({
    count: state.count
})

// connect returms a new componet and so we are connecting 
// a new component and connect it to redux store.
export default connect(mapStateToProps)(Counter);