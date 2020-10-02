import React, { Component } from 'react';

class Counter extends Component {

    state={
        count:0,
        tags : ['tag1', 'tag2', 'tag3']
    }

    formatCount(){
        const {count} = this.state
        return count === 0  ? 'Zero': count;
        }
        // render class styling dynamically////
        getBadgeClasses() {
            let classes = " badge m-2 badge-";
            classes+= (this.state.count === 0) ? "warning" : "primary";
            return classes;
        }



    render() { 
        return ( 
            <React.Fragment>
                <span 
                className={this.getBadgeClasses()}
                >
                {this.formatCount()}
                </span>
                <button className="btn btn-primary btn-sm"> Increment</button>
                {/* Rendering lists froms state*/}
                <ul>
                {this.state.tags.map(tag=>
                    <li key="tag">{tag}</li>)}
                </ul>
            </React.Fragment>
            
         );
    }

    
}
 
export default Counter;