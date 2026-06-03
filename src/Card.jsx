//import React from 'react'

function Card(props) {
  return (
    <div style={{border:"1px red solid",
      width:"300px",
      padding:"10px",
      margin: "10px",
      borderRadius:"10px",
      backgroundColor:"yellowgreen"
    }}>
        <img  height={250} width={250} src={props.image} alt="" />
        <h2>{props.title}</h2>
        <h2>price:{props.price}</h2>
    </div>
  )
}

export default Card
