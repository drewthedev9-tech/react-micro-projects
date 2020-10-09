// this file is responsible for talking to our users
// endPoint
import http from "./httpService"
// shortHand config.apiUrl
import {apiUrl} from "../../config.json"

const apiEndpoint = apiUrl + "/users";

export function register(user){
    return http.post(apiEndpoint, {
        name:user.username,
        email: user.email,
        password: user.password
        
    })
}