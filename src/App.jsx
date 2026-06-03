import Header from  './Header'
import About from './About'
import Products from './Products'
import Signin from './Signin'
import Signup from './Signup'
import {Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
function App() {

  //state to manage search query
  const[searchquery, setsearchquery]= useState('')
  return (
    <>
    <Header setsearchquery={setsearchquery}/>
    <Routes>
      <Route path='/' element={<Products searchquery={searchquery} /> }/>
      <Route path='/about' element={<About/> } />
      <Route path= '/products' element={<Products searchquery={searchquery} />} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/login' element={<Signin/>} />
    </Routes>
    </>
  )
}
export default App
