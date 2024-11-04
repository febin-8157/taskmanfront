import React, { useState } from 'react';
import { addTaskApi } from '../services/allApi';
const App = () => {

  const [taskText, setTaskText] = useState('');
  // todos = store , 2nd => todos of array in slice

  const handleAddTask=async()=>{
    if (taskText){
    //api call
    await addTaskApi(task)
    getAllCategory()
    }else{
      toast.warning("please fill the form")
    }
  }


  return (
   <>
    <h1 className="text-center font-bold  mb-6">Manage Your Task</h1>
    <div className='container card shadow-4 p-4 w-50'>
        <div className=''>
            <input onChange={e=>setTaskText(e.target.value)} className='rounded w-75 p-2' type="text" placeholder='Enter your Task' />
        <button onClick={handleAddTask} className='ms-4 btn bg-danger'>Add  Task</button>
        </div>
        
        
        
                
        </div>
   </>
  );
};

export default App;