import {useState} from "react";

// making your own custom hooks////

export const useForm =(initialValues)=>{
     // replacement for state in class components
    // first value of the array is the state
    // second value isa function that lets you update the count.
    const [values , setValues] = useState(initialValues);

    return[
        values, e=>{
            setValues({
                ...values,
                [e.target.name] : e.target.value
            })
        }]
    }
