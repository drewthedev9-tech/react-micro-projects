import React, { Component } from 'react';
import ImageSlider from './imageSlider';
import Counter from "./counter"

class Conditional extends Component {
    state = { 
        visible: true
     }

     handleHide=()=>{
         this.setState({
        visible: !this.state.visible     
        })
     }

    render() { 
        const buttonText = this.state.visible ? "hide" : "show"
        const{ visible} = this.state;
      
        return ( 
            <div>
              {visible ? <ImageSlider/>: <Counter/>}
                <button
                onClick={this.handleHide}
                >
               {buttonText}
                </button>
            </div>
           
       
            
           
         );
    }
}
 
export default Conditional;