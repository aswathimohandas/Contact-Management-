import { useState } from 'react'
import Header from './components/Header'
import './bootstrap.min.css'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>
     </>
     
    
  )
}

export default App
