import axios from "axios"

const BASEURL = "http://localhost:4000"

const commonApi = async (method, url, body, headers) => {
    const urlConf = {
        method,
        url,
        data: body,
        headers: headers || { "Content-Type": "application/json" },
    };
    
    return await axios(urlConf)
    .then((res) => res)
    .catch((err) => {
        console.error("API Error:", err);
        throw err;
    });

};


export const RegisterApi = async (data) => {
    return await commonApi("POST", `${BASEURL}/user/register`, data, "");
};
export const Login = async (data) => {
    return await commonApi("POST", `${BASEURL}/user/login`, data, "");
};


