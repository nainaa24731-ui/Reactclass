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
    <header style={{display:"flex", justifyContent:"space-around",
    alignItems:"center", padding:"10px",marginTop:"20px", fontSize:"30px"}}>
        <img src="src\assets\vite.svg" alt="LOGO" width="150" height="80" />
        <input 
        onChange={(e)=>{setsearchquery(e.target.value)}} 
        style={{
          borderRadius:"10px",
          width:"33%",
          height:"40px",
          marginTop:"20px",
          fontSize:"25px",
          fontWeight:"bolder"}}
        type="text" 
        placeholder= "search the products" />

        <nav style={{display:"flex",gap:"10px"}}>
            {/*<a href="">HOME</a>*/}
            <Link to={'/'}> <a href="">HOME</a> </Link>
            <Link to={'/Products'}><a href="">PRODUCTS</a> </Link>
            <Link to={'/About'} ><a href="">ABOUT</a> </Link>
            <Link to={'/signup'}> <a href="">SIGNUP</a> </Link>
            <Link to={'/login' }> <a href="">SIGNIN</a> </Link>
        </nav>

        <button onClick={togglemode} style={{fontSize:"30px",borderRadius:"10px"}} >dark/light</button>
        
    </header>
  )
}

export default Header
