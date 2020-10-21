import React, { Component } from 'react';


class SearchBox extends Component {
        
    render() { 
    return ( 
        <div>
            <input 
            type="search" 
            placeholder="Search Profiles"
            onChange={this.props.searchChange}
            />
        </div>
             );
        }
    }
     
export default SearchBox;
  

