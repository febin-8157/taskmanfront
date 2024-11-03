import React, { useState } from 'react'
import { FloatingLabel, Form,Spinner } from 'react-bootstrap'
import { Link, useNavigate,  } from 'react-router-dom'
import { registerApi } from '../services/allApi'


const Auth = ({ insideRegister }) => {
  const [isLoading,setIsLoading]=useState(false)
  const navigate =useNavigate()
  const [userData,setuserData]=useState({
    username:"",email:"",password:""})
    console.log(userData);
    
 const handleRegister  = async(e)=>{   
  e.preventDefault()
  if(userData.username&&userData.email&&userData.password){
    // api call
    try{
      const result =await registerApi(userData)
      console.log(result);
      
      if(result.status==200){
        alert(`Welcome ${result?.data?.username}...Please Login !!!`)
        setuserData({username:"",email:"",password:""})
        navigate('/login')
      }else{
        if(result.response.status==406){
          alert(result.response.data)
          setuserData({username:"",email:"",password:""})
        }
      }
    }catch(err){
      console.log(err);
      
    }
  }else{
    alert("Please fill the form")
  }
 }  
 
 const handleLogin=async (e)=>{
e.preventDefault()
if(userData.email && userData.password){
  // .api call
  try{
    const result =await loginApi(userData)
    console.log(result);
    if(result.status==200){
      sessionStorage.setItem("user",JSON.stringify(result.data.user))
      sessionStorage.setItem("token",result.data.token)
      setISAuthorised(true)
     setIsLoading(true)
     setTimeout(()=>{
      setuserData({username:"",email:"",password:""})
      navigate('/')
      setIsLoading(false)
     },2000);
    }else{
      if(result.response.status==404){
        alert(result.response.data)
      }
    }
  }catch(err){
    console.log(err);
    
  }
}else{
  alert("please fill the form completly")
}

 }
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className="w-75 container">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="https://img.lovepik.com/element/45009/8997.png_860.png" alt="" className='w-100' />
            </div>
            <div className="col-lg-6">
              <h1 style={{ fontSize: '40px' }}><i className="fa-brands fa-docker me-2"></i>Task Manager</h1>
              <h5 className='fw-bolder'>Sign {insideRegister ? "Up" : "In"} to your Account</h5>
              <Form>
                {
                  insideRegister &&
                  <FloatingLabel controlId="floatingName"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control  onChange={e=>setuserData({...userData,username:e.target.value})} type="text" placeholder="Username" />
                  </FloatingLabel>
                }
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control  onChange={e=>setuserData({...userData,email:e.target.value})} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control  onChange={e=>setuserData({...userData,password:e.target.value})}  type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister ?
                  <div className="mt-3">
                    <button onClick={handleRegister} className='btn btn-warning mb-2 ' >Register</button>
                    <p >Already have an account? Click here to <Link to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className="mt-3">
                  <button onClick={handleLogin}  className='btn btn-warning mb-2 d-flex' >login
                   {isLoading && <Spinner animation="border" variant="warning" />}</button>
                  <p >New user? Click here to <Link to={'/register'}>Register</Link></p>
                </div>
                }
              
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth