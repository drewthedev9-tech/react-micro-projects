import React , {useState}from 'react';

const ReactHooks = () => {
    // replacement for state in class components
    // first value of the array is the state
    // second value isa function that lets you update the count.
const [count , setCount] = useState(10);
const [count2 , setCount2] = useState(20);

    return (  

        <div>
          <div>
            <button onClick={()=>{
              setCount(currentState=> currentState +1);  
            }}
            >
            Increment count:1
            </button>
            <button onClick={()=>{
                setCount2(currentState=> currentState + 1) 
            }}
            >
            Increment count:2
            </button>
            <div>
            count1: {count}
           </div>
           <div>
           count2 : {count2}
           </div>
          </div>
        </div>
    );
}
 
export default ReactHooks;