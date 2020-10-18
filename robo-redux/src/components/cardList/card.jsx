import React, { Component } from 'react';

import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./card.css"


class CardProfile  extends Component {
   
    
    render() { 
        const {users} = this.props
        return ( 
            <React.Fragment>
            <h1>User profiles</h1>
          
            <div className="flex-box">
              
                {users.map(people=>(
                <div key={people.login.uuid}>
                <div className="card-container">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={people.picture.large} />
                    <Card.Body>
                    <Card.Title>
                    {people.name.first}<br/>
                    {people.name.last}
                    </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Check out profile</Button>
                    </Card.Body>
                </Card>
                </div>
               
                </div>
              ))}


            </div>
            
            </React.Fragment>
        
         );
    }
}
 
export default CardProfile ;