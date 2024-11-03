
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import TaskPage from './pages/TaskPage'
import Home from './pages/HomePage'
import Header from './components/Header'

function App() {
  return (
    <> <Header/>
      <Routes>       
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/taskpage' element={<TaskPage/>}/>
      </Routes>
    </>
  )
}

export default App
