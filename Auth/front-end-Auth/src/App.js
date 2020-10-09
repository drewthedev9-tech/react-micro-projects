import React, { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from "./components/navBar/navbar";
import Register from "./components/form/register";
import Login from "./components/form/login";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
// import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
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
