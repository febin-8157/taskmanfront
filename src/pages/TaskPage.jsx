import React, { useState } from 'react';
const App = () => {
  const [todoText, setTodoText] = useState('');
  // todos = store , 2nd => todos of array in slice

  const handleAddTodo = () => {
    
  };

//   const handleToggleComplete = () => {
    
//   };

//   const handleDeleteTodo = (id) => {
    
//   };

  return (
   <>
    <h1 className="text-center font-bold  mb-6">Manage Your Task</h1>
    <div className='container card shadow-4 p-4 w-50'>
        <div className=''>
            <input className='rounded w-75 p-2' type="text" placeholder='Enter your Task' />
        <button onClick={handleAddTodo} className='ms-4 btn bg-danger'>Add  Task</button>
        </div>
        
        
        
                
          <ul className="w-full max-w-md space-y-2">
            {/* {todos.map((todo) => (
              <li
              key={todo.id}
              className={`flex justify-between items-center p-2 border border-gray-200 rounded-md ${
                todo.completed ? 'bg-green-200' : 'bg-white'
              }`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                className="mr-3 ml-2 h-5 w-5 accent-green-500"
              />
              <span
                onClick={() => handleToggleComplete(todo.id)}
                className="cursor-pointer flex-1 text-left"
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </li>
            
            ))} */}
          </ul>
        </div>
   </>
  );
};

export default App;