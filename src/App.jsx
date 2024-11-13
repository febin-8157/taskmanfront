
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/HomePage'
import Header from './components/Header'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import DisplayPage from './pages/DisplayPage'
function App() {
  return (
    <> <Header/>
      <Routes>       
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/display' element={<DisplayPage/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
