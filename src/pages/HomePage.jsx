import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
            <div style={{minHeight:'80vh'}} className='d-flex justify-center align-items-center rounded shadow border m-5'>
        <div className='container p-5'>
      <div className='row align-items-center'>
    <div className='col-lg-6'>
    <h1 style={{fontSize:'80px'}}>Contact Manager</h1>
    <p style={{textAlign:'justify'}}> A contact management app is used  to manage your contacts.</p>


<Link to={'/contact'} className='btn btn-primary '>Start To Manage</Link>

   </div> 
    <div className='col-lg-6'>
     <img className='fluid rounded' style={{width:'500px',height:'330px'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzg6IB0Ez1dCrBhkqbxE3Iq_1J2PpQEh_nQ&s" alt="" />
     </div>

      </div>

        </div>
        
         </div>

    </>
  )
}

export default HomePage
