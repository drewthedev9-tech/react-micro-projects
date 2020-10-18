import React from 'react';

import './App.css';
// import Counter from "./components/counter-redux/counter";
import {createStore} from "redux";
// import {Provider} from "react-redux";
import reducer from "./components/counter-redux/reducer"
//  import Counter from  "./components/counter"
// import Prac from "./components/react-practice";
// import ImageSlider from "./components/imageSlider.jsx"
// import Conditional from './components/conditional';
// import Form from "./components/form.jsx"
//  import MyForm from "./components/myForm"
 //import ValidationForm from "./components/validationForm";
 import CallAPI from "./components/callAPI.jsx"
// import TodoList from './components/todolist';



// for counter-redux
const store = createStore(reducer);
// passes into the action param in reducer.
store.dispatch({
  type: "INCREMENT"
})
store.dispatch({
  type: "DECREMENT"
})

// needed for counter-redux
// <Provider store={store}>
//       <div className="App">
//       <TodoList/>
//       </div>
//     </Provider>
function App() {
  return (
    <div className="App">
      <CallAPI/>
    </div>
    
   
  );
}

export default App;
