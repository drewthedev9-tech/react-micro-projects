
import React, { Component } from 'react';

class Body extends Component {
    //  destrcuturing in a classcomponent.
        render() { 
            const{title} = this.props;
            return (  
                <h1>{title}</h1>
            );
        }
    }

    

export default Body;