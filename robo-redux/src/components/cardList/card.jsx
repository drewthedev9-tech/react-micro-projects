import React, { Component } from 'react';
import SearchBox from "../serchBox/searchBox";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

import axios from 'axios';

import { setSearchField , requestRobots } from '../../redux/actions';
import {connect} from "react-redux";
import "./card.css"



const mapStateToProps = state =>{
    return{
        // coming from reducers is inside props
        // right now only one state will have to add many and do dot notaion = state.searchRobots.searchField
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
  }
  
  // dispatch is jargon for ehat sends a action to reducer.
  const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        // getting the requestRobots action
        onRquestRobots:()=> dispatch(requestRobots)
    }
}

class CardProfile  extends Component {
    // dont need because of redux
    state = { 
        profiles:[],
        // getting state from redux
        //   searchField: ''
        
     }

     
    
    async componentDidMount(){
    // can check the redux store being passsed down as props from index.js ->app.js -> card.js 
    // console.log(this.props.store.getState())
    // no need since redux
    const url = "https://randomuser.me/api/?results=6"
    const response =  await axios.get(url)
    console.log(response.data.results)
    this.setState({
        profiles: response.data.results
    })
    // test state to see if it has API info.
    console.log("state",this.state.profiles)
    //  this.props.onRquestRobots();
    }
//    no need fsince redux
    // onSearchChange=(event)=>{
    //     console.log(event.target.value)
    //     this.setState({
    //       searchField: event.target.value
    //     }) 
    // }
    
    render() { 
        // all the methods in props from connect because of redux
        // robots is from props being passed down through redux
        // change robots to this.state.profiles to robots
         const {searchField, onSearchChange, robots} = this.props
        const users = this.state.profiles.filter(profile=>{
            return profile.name.first.toLowerCase()
            // filters based on the target value searchfield ( searchField is coming from props from redux).
            .includes(searchField.toLowerCase());
          })
        return ( 
            <React.Fragment>
            <h1>User profiles</h1>
            <SearchBox searchChange={onSearchChange}/>
          
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
 
export default connect(mapStateToProps, mapDispatchToProps)(CardProfile) ;