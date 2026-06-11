//import React from 'react'

function Card(props) {
  return (
    <div 
    style={{
      border:"1px red solid",
      width:"200px",
      padding:"20px",
      margin: "10px",
      borderRadius:"10px",
      backgroundColor:"yellowgreen"
      }}>
        
        <img 
        style={{height:"150px",width:"150px"}}
        src={props.image} 
        alt="" />

        <h2 style={{fontSize:"15px"}}>{props.title}</h2>

        <h3 style={{fontSize:"15px",color:"darkblue"}} >
          Price:{props.price}
        </h3>
    </div>
  )
}

export default Card
