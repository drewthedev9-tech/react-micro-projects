import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './actionTypes.js'
import axios from "axios";

export const setSearchField = (text)=>({
    
    type: CHANGE_SEARCH_FIELD,
    // what will be sent to the reducer
    payload: text
})


// actions creators///////
const fetchUsersRequest = () => {
    return {
      type: REQUEST_ROBOTS_PENDING
    }
  }
  
  const fetchUsersSuccess = users => {
    return {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: users
    }
  }
  
  const fetchUsersFailure = error => {
    return {
      type: REQUEST_ROBOTS_FAILED,
      payload: error
    }
  }

//   async action terunng a higher order function (a function passing a function as params).
// this returns a function so needs redux-thunk middleware 
export const requestRobots = ()=> 
   async function (dispatch){
    try{
    dispatch(
        fetchUsersRequest()
    )
        const url = "https://randomuser.me/api/?results=6"
        const response =  await axios.get(url)
        console.log(response.data.results)
        dispatch(fetchUsersSuccess(response.data.results))

    }catch(ex){
            dispatch(fetchUsersFailure(ex.error))
    }
    
}


// test actions input to console.
// export const setSearchField = (text)=>{
//     console.log(text)
//     return{
//         type: CHANGE_SEARCH_FIELD,
//         // what will be sent to the reducer
//         payload: text
//     }
   
// }