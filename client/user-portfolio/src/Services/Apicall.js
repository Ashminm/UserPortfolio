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

export const AddProfile=async(data,headers)=>{
    return await commonApi("POST",`${BASEURL}/add-profile`, data,headers)
}
export const GetProfile=async(headers)=>{
    return await commonApi("GET",`${BASEURL}/get-profile`,"",headers)
}

export const AddAbout=async(data,headers)=>{
    return await commonApi("POST",`${BASEURL}/add-about`, data,headers)
}
export const AddLang=async(data,headers)=>{
    return await commonApi("POST",`${BASEURL}/add-lang`, data,headers)    
}
export const AddCurrent=async(data,headers)=>{
    return await commonApi("POST",`${BASEURL}/add-current`, data,headers)    
}
export const AddSkill=async(data,headers)=>{
    return await commonApi("POST",`${BASEURL}/add-skill`, data,headers)    
}
export const AddTool=async(data,headers)=>{
    return await commonApi("POST",`${BASEURL}/add-tool`, data,headers)    
}
export const AddService=async(data,headers)=>{
    return await commonApi("POST",`${BASEURL}/add-service`, data,headers)    
}
export const AddWork=async(data,headers)=>{
    return await commonApi("POST",`${BASEURL}/add-work`, data,headers)    
}
export const AddExperiance=async(data,headers)=>{
    return await commonApi("POST",`${BASEURL}/add-experiance`,data,headers)    
}



