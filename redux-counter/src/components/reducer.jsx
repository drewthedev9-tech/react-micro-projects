
const initialState ={
    count: 42
}

// action is responsible for returning the new state.
export default function reducer(state =initialState, action){
    switch(action.type){
        case "INCREMENT":
            return{
              count:  state.count + 1
            }
        case "DECREMENT":
                return{
                  count:  state.count - 1 
                }
            // just in case state is not handeled
            // defaults back to old state.
            default:
                return state;
    }
  }
  