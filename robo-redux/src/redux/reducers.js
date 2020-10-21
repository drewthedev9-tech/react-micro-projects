import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './actionTypes.js'


const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = initialStateSearch, action)=>{
    // tets the action type that is being sent.
    // console.log(action.type)
    switch(action.type){
        // if this case is true deduct 1
        case CHANGE_SEARCH_FIELD: 
        return { 
             // returning a new state and keping the olf one which is reffering to 
            // initial state.
            // always need to keep state immutable
            // then update searchfield state with the new payload from action.
            ...state, 
           searchField: action.payload
        }
        // if not the action above return initialstate
        default: 
        return state
    }
}

const initialStateRobots ={
    isPending: false,
    robots: [],
    error:''
}

export const requestRobots = (state = initialStateRobots, action)=>{
    console.log(action.type)
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state,
              isPending: true
    }   
    case REQUEST_ROBOTS_SUCCESS:
            return{
                ...state,
                robots: action.payload, 
                isPending: false
            }
      case REQUEST_ROBOTS_FAILED:
          return{
              ...state,
              error: action.payload, 
              isPending:false
          }  
          default:
               return state;  
   }
}





