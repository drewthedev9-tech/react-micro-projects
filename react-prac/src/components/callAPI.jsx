import React, { Component } from 'react';
import axios from "axios";

class callUser extends Component {
    state = { 
        loading: true,
        people: [],
     }

    //  best place to put APi calls as it doesnt render first
     async componentDidMount(){
        try{
            const url = "https://api.randomuser.me/?results=5";
            const response = await axios.get(url)
             //  then also returns a Promise making it chainable.
             // test call
             console.log(response.data.results)
             this.setState({people: response.data.results, loading: false});
            
             // test call
              console.log(this.state.people.name);
            }catch(ex){
                console.error("probably typed the URL name wrong the ", ex)
                }
         
       
        

     }
    render() { 
        // destructuring
        const {loading, people} = this.state
 
        return (
            <div>
            {loading || !people ? ( <div>loading...</div> )
                : ( 
                    <div>
                   {people.map(person=>(
                       <div key={person.login.uuid}>
                        <div>{person.name.title}</div>
                        <div>{person.name.first}</div>
                        <div>{person.name.last}</div>
                        <img src={person.picture.large} alt ="pic"/>
                       </div>
                   ))}
                    </div>
                )
             }
            </div>
                
            
          );
    }
}
 
export default callUser;   
    
 