import React, { useEffect, useState } from 'react'
import {  getContactApi } from '../services/allApi'
const DisplayPage = () => {
    const [alluser, setAllUser] = useState([]);

useEffect(()=>{
    getAllContact()
})

    const getAllContact =async()=>{
        const response= await getContactApi()
        if(response.status>=200 && response.status<300){
          setAllUser(response.data)
        }
      }
      console.log(alluser);
         return (
        <div className='container mx-auto p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Your Contacts</h2>
                            {
                                 alluser.map((user, index) => (
                                <div  className="border-b mb-4 pb-4">
                                
                                <p className="text-gray-600">#{index+1} </p>
                                <p className="text-gray-600">Name:{user.name} </p>
                                <p className="text-gray-600">Email:{user.email} </p>
                                <p className="text-gray-600">Phone: {user.phone}</p>
                            </div>
                        ))}
                </div>)
        
    
}

export default DisplayPage