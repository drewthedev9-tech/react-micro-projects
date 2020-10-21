import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from "react-redux"
import {searchRobots} from './redux/reducers';
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';


const store =createStore(searchRobots)

ReactDOM.render(
  <React.StrictMode>
  {/* Provider will pass the store down to every child of the app
  Inother words all our components*/}
  <Provider store={store}>
      <App/>
  </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
