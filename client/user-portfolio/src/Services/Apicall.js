import axios from "axios"

const BASEURL = "http://localhost:4000"

const commonApi = async (method, url, body, headers) => {
    const urlConf = {
        method,
        url,
        data: body,
        headers: headers ? headers : { "Content-Type": "application/json" },
    };
    return await axios(urlConf)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
};


export const RegisterApi = async (data) => {
    return await commonApi("POST", `${BASEURL}/user/register`, data, "");
};
export const LoginApi = async (data) => {
    return await commonApi("POST", `${BASEURL}/user/login`, data, "");
};


