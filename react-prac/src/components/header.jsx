// for using JSX needs react library.
import React from 'react';
// sfc title props destructured.
const Header  = ({title, myObj, myArray, myFunc}) => {
    
    return ( 
        <div>
            <h1>{title}</h1>
           {/*cant display objects so needed to put into jsoon string*/} 
            <div>{JSON.stringify(myObj)}</div>
            <div>{myArray[0]}</div>
            <div>{myFunc(1,2)}</div>

        </div>
       
     );
}

export default Header;