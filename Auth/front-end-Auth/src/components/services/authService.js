import http from "./httpService"
// shortHand config.apiUrl
import {apiUrl} from "../../config.json"

const apiEndpoint = apiUrl + "/auth";


// function to use
export function login(email, password){
    // post taking URL and the body of the request
    return http.post(apiEndpoint, {
        email,
        password
    });
}