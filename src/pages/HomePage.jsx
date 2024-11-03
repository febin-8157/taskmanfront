import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
            <div style={{minHeight:'100vh'}} className='d-flex justify-center align-items-center rounded'>
        <div className='container '>
      <div className='row align-items-center'>
    <div className='col-lg-6'>
    <h1 style={{fontSize:'80px'}}>Task Manager</h1>
    <p style={{textAlign:'justify'}}> A task management tool is used by an individual, team, or organization to complete projects efficiently by organizing and prioritizing related tasks. Task management tools come in many forms, like basic spreadsheets or online project management applications.</p>


<Link to={'/login'} className='btn btn-primary '>Start To Explore</Link>

   </div> 
    <div className='col-lg-6'>
     <img className='fluid rounded' style={{width:'700px'}}  src="https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525" alt="" />
     </div>

      </div>

        </div>
        
         </div>

    </>
  )
}

export default HomePage
