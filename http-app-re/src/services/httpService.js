import axios from 'axios';
import logger from "./logService";


// centralized place for error handling so we dont reapt
// code for error handling.
// two parameters susscess, error only using erro here.
axios.interceptors.response.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    // unexpected errors.(nw down, server down, db down)
      // display a geberic and friendly error message.
      // if its an unexpected error do the following:
    if (!expectedError) {
        logger.log(error);
      console.log('logging the errror', error)
    alert('an unexpoected error occured');
    }
    return Promise.reject(error);
  })

// exporting a default object with four methods.
export default {
    get : axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};