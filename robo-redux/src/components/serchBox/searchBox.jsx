import React from 'react';

const SearchBox = (props) => {
    return ( 
        <div>
            <input 
            type="search" 
            placeholder="Search Profiles"
            onChange={props.searchChange}
            />
        </div>
       
     );
}
 
export default SearchBox;