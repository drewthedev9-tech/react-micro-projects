import React, { Component } from 'react';

import Card from "../components/cardList/card";
import Scroll from "../components/cardList/scroll"

import {searchRobots, requestRobots} from '../redux/reducers';
import {Provider} from "react-redux"
import {createStore, applyMiddleware,combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const logger = createLogger() 

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

class App extends Component {
  render() { 
    return ( 
      <Provider store={store}>
      <div className="App">
        <Scroll>
            <Card/>
        </Scroll>
      </div>
      </Provider>
     
      
     );
  }
}
 
export default App;

