import axios from "axios";

// base url for the API
const apiEndPointUrl = "https://httpbin.org/";
const apiEndPoint = "http://127.0.0.1:8000/api/";


interface RegisterData {
    name: string;
    email: string;
    password: string;
}

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

    callRegister(registerData: RegisterData) {
        return axios.post(apiEndPoint + "register", registerData);
    }
}

const apiService = new ApiService();
export default apiService;