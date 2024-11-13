import commonApi from "./commonApi"
import SERVERURL from "./serverUrl"

// create
export const CreateContactApi= async (reqBody)=>{
    return await commonApi("POST",`${SERVERURL}/createcontact`,reqBody)
}

export const getContactApi  =async ()=>{
    return await commonApi("GET",`${SERVERURL}/getcontact`,"")
   }

   