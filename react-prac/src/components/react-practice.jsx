import React, { Component } from 'react';

import Header from "./header";
import Body from "./body";

 



class Form extends Component {
   
    render() { 
       
            return ( 
            <React.Fragment>
            <Header title="heloo world"
            myObj={{
                a:5,
                b:6
            }}
            myArray={[1,2,3,]}
            myFunc ={(a,b)=> a+b}
            />
            <Body
            title ={"this is body"}
            />
            </React.Fragment> 
           
          
        );
    }
}
 
export default Form;