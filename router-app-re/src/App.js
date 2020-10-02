import React, { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from "./components/navBar/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

// switch mathches first route and oly displays the corresponding component
// after that other outes will be ignored sow ill only diplay that single component.

// div content - is where the content and component will be shown

// passing props - render instead of compnent we pass a function that passes the componet
// then we can pass props to it eg. sortBy="newest"
// props and {...props} is there to pass the needed history, location, match

// passing parameters for the products page

// ? is part of REGEX and means the paremter reading is optional

// Redirect - if the switch goes thorugh all the  routes and cant find the match will redirect to the 
// given component and in this case not-found component in a seprate route. 
// redirect can also edirect someine from a specified page t another 
// like below if they tpe messages then they are redirected to posts.

// should make your routes organized from specific to genaral as the components
// below are.
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
          <Route path='/products/:id' component={ProductDetails}/>
          <Route path="/products" render={(props)=> <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts}/>
            <Route path="/not-found" component={NotFound}/>
            <Redirect from="/messages" to="/posts"/>
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
