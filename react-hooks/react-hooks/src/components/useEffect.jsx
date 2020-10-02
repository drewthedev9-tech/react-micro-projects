import React, {useEffect}from 'react';
import { useForm } from './hookForm/hookForm';



const ReactHooks = () => {
//    custom hook
const [values, handleChange] =useForm({ email:"", password:""})


    return (  

        <div>
            <input name="email"
            value={values.email}
            onChange={handleChange}
            />
            <input 
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            />
        </div>
    );
}
 
export default ReactHooks;