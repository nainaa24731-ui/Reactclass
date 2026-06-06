//import React from 'react'
//import {useState} from "react" 

import { Link } from "react-router-dom"
function Header({setsearchquery}) {
//const[userinput,setuserinput]=useState('')

//function which will toggle dark/light mode
function togglemode() {
  //document.body.classList.add('dark')
  //document.body.classList.remove('dark') 
  document.body.classList.toggle('dark')

}

  return (
    <>
    <header style={{display:"flex", justifyContent:"space-around"}}>
        <img src="src\assets\vite.svg" alt="LOGO" />
        <input onChange={(e)=>{setsearchquery(e.target.value)}} style={{borderRadius:"10px",width:"33%"}} type="text" placeholder= 'search the products' />

        <nav style={{display:"flex",gap:"10px"}}>
            <a href="">HOME</a>
            <Link to={'/products'} ><a href="">PRODUCTS</a> </Link>
            <Link to={'/about'} ><a href="">ABOUT</a> </Link>
            <Link to={'/signup'}> <a href="">SIGNUP</a> </Link>
            <Link to={'/login' }> <a href="">SIGNIN</a> </Link>
        </nav>

        <button onClick={togglemode}>dark/light</button>
        
    </header>
    </>
  )
}

export default Header
