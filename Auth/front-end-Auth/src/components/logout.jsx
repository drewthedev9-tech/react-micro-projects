import  {Component}  from 'react';

class Logout extends Component {
    
    componentDidMount(){
        // remove user form home page
        localStorage.removeItem('token');
        // redirect user to the home page
        // app reloaded copunted monted gain and local storage refreshed emoty 
        // causing a log out.
        window.location = "/";
        }

    render() { 
        return null;
    }
}
 
export default Logout;
