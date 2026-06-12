import { useState } from "react"

function Signup() {
  const[username, setusername]=useState('')
  const[password, setpassword]=useState('')
  const[email, setemail]=useState('')
  const[role, setrole]=useState('')
  
  let onsubmit=async (event)=>{
    event.preventDefault()

    let userdetails={username,password,email,role}
    
    let result=await fetch('http://localhost:3000/auth/register',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userdetails)
    })
    let finalresponse=await result.json();
    alert(finalresponse.msg)
  }

  return (
    <>
    <form onSubmit={onsubmit} >
      <h2>Create your account</h2>
      <p>Welcome! Please fill in the details to get started.</p>
      <div>
        <label>username</label>
        <input onChange={(e)=>{
          setusername(e.target.value)
        }} type="text" placeholder="username" />
      </div>

      <div>
        <label>email</label>
        <input onChange={(e)=>{
          setemail(e.target.value)
        }} type="text" placeholder="email"/>
      </div>
      
      <div>
        <label>password</label>
        <input onChange={(e)=>{
          setpassword(e.target.value)
        }} type="text" placeholder="password"/>
      </div>
      
      <div>
        <label>role</label>
        <input onChange={(e)=>{
          setrole(e.target.value)
        }} type="text" placeholder="role"/>
      </div>
      <button type="submit" >register</button>
    </form>

    </>
  )
}

export default Signup