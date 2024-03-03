import axios from "axios";

// base url for the API
const apiEndPointUrl = "https://httpbin.org/";
const apiEndPoint = "http://127.0.0.1:8000/api/";

//Interfaces
import { RegisterDataInterface, LoginDataInterface } from '../types/types'

// define a class to encapsulate the API calls
class ApiService {

    getFakeData(controller: AbortController = new AbortController()) {
        return axios.get(apiEndPointUrl + "get", {
            headers: {
                // you can add your custom headers here
            },
            params: {
                // you can add your custom params here
            },
            // pass the signal to the request
            signal: controller.signal,
        });
    }

    callRegister(registerData: RegisterDataInterface) {
        return axios.post(apiEndPoint + "register", registerData);
    }

    callLogin(loginData: LoginDataInterface) {
        return axios.post(apiEndPoint + "login", loginData);
    }

    callUserProfile(token: any, controller: AbortController = new AbortController()) {
        return axios.get(apiEndPoint + "profile", {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            params: {
                // you can add your custom params here
            },
            // pass the signal to the request
            signal: controller.signal,
        });
    }

    callRefreshToken(token: any, controller: AbortController = new AbortController()) {
        return axios.get(apiEndPoint + "refresh", {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            params: {
                // you can add your custom params here
            },
            // pass the signal to the request
            signal: controller.signal,
        });
    }

    callLogOut(token: any, controller: AbortController = new AbortController()) {
        return axios.get(apiEndPoint + "logout", {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            params: {
                // you can add your custom params here
            },
            // pass the signal to the request
            signal: controller.signal,
        });
    }
}

const apiService = new ApiService();
export default apiService;