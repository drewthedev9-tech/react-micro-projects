import React, { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import NavBar from "./components/navBar/navbar";
import Register from "./components/form/register";
import Login from "./components/form/login";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
// import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {

state ={}
// /componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here.
// usually used for getting stuff from API
componentDidMount(){
  // need a try catch because app will crash if it has a invalid JWT.
  try{
    // calling the localStorage
    const jwt = localStorage.getItem("token");
    // 3rd party library
    const user = jwtDecode(jwt);
    // see the decode JWT
    console.log(user)
    this.setState({
      user: user
  })
  }catch(ex){}



}
  render() {
    return (
      <div>
        <NavBar user={this.state.user}/>
        <div className="content">
          <Switch>
         
          <Route path="/register" component={Register} />
            <Route path="/login" component={Login}/>
            <Route path="/not-found" component={NotFound}/>
            <Route path="/admin" component={Dashboard}/>
            <Route path="/" exact component={Home}/>
            <Redirect to="/not-found"/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
