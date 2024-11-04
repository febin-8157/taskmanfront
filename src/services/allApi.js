import commonApi from "./commonApi"
import SERVERURL from "./serverUrl"

// register
export const registerApi= async (reqBody)=>{
    return await commonApi("POST",`${SERVERURL}/register`,reqBody)
}

export const loginApi= async (reqBody)=>{
    return await commonApi("POST",`${SERVERURL}/login`,reqBody)
}

export const addTaskApi  =async (reqBody)=>{
    return await commonApi("POST",`${SERVERURL}/addtask`,reqBody)
   }
