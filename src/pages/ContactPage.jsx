import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateContactApi } from '../services/allApi';
const ContactPage = () => {

  const navigate =useNavigate()
  const [contactData,setContactData]=useState({
    name:"",email:"",phone:""})
    console.log(contactData);

    const handleCreate  = async(e)=>{   
      e.preventDefault()
      if(contactData.name&&contactData.email&&contactData.phone){
        // api call
        try{
          const result =await CreateContactApi(contactData)
          console.log(result);
          
          if(result.status==200){
            alert(` ${result?.data?.name}...Your contact is created and Saved !!!`)
            setContactData({ name:"",email:"",phone:""})
            navigate('/display')
          }else{
            if(result.response.status==406){
              alert(result.response.data)
              setContactData({ name:"",email:"",phone:""})
            }
          }
        }catch(err){
          console.log(err);
          
        }
      }else{
        alert("Please fill the form")
      }
     }  
    
  return (
   <>
    <h1 className="text-center font-bold  mb-6">Enter Your Details</h1>
    <div className='container card shadow-4 p-4 w-50 '>
        <div className=''>
            <input  onChange={e=>setContactData({...contactData,name:e.target.value})} className='rounded w-75 p-2 mb-2' type="text" placeholder='Enter your name' />
            <input onChange={e=>setContactData({...contactData,email:e.target.value})} className='rounded w-75 p-2 mb-2' type="text" placeholder='Enter your email' />
            <input onChange={e=>setContactData({...contactData,phone:e.target.value})} className='rounded w-75 p-2 mb-2' type="text" placeholder='Enter your phone number' /> <br />
              <button onClick={handleCreate} className='rounded bg-primary p-2 w-25 fw-bolder'>Create</button>
        </div>
        
        
        
                
        </div>
   </>
  );
};

export default ContactPage;