import React from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./components/reducer"
import Counter from './components/counter';
import './App.css';

// for counter-redux
const store = createStore(reducer);
// passes into the action param in reducer.
store.dispatch({
  type: "INCREMENT"
})
store.dispatch({
  type: "DECREMENT"
})

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter/>
    </div>
  </Provider>
  );
}

export default App;
