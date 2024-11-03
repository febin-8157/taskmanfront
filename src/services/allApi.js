import commonApi from "./commonApi"
import SERVERURL from "./serverUrl"

// register
export const registerApi= async (reqBody)=>{
    return await commonApi("POST",`${SERVERURL}/register`,reqBody)
}