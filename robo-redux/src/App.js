import React, { Component } from 'react';
import SearchBox from './components/serchBox/searchBox';
import Card from "./components/cardList/card";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  state = { 
    profiles:[],
    searchField: ''
    
 }

async componentDidMount(){
const url = "https://randomuser.me/api?results=6"
const response =  await axios.get(url)
console.log(response.data.results)
this.setState({
    profiles: response.data.results
})
// test state to see if it has API info.
console.log(this.state.profiles)
}


// passing down as props
onSearhChange=(event)=>{
  console.log(event.target.value)
  this.setState({
    searchField: event.target.value
  })
 

}


  render() { 
    // filtering magic
    const filteredProfiles=this.state.profiles.filter(profile=>{
      return profile.name.first.toLowerCase()
      // filters based on the target value searchfield
      .includes(this.state.searchField.toLowerCase());
    })
    return ( 
      <div className="App">
    <SearchBox searchChange={this.onSearhChange}/>
      <Card users={filteredProfiles}/>
    </div>
     );
  }
}
 
export default App;

