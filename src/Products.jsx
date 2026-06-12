
import Card from "./Card";
import {useState,useEffect} from "react";
function Products({searchquery}) {
    //fetch the products from fakestore api
    const [products,setproducts] = useState([])

    //async function fetchproducts(){
    // let data=await fetch('https://fakestoreapi.com/products')
    // let finaldata=await data.json() 
    // setproducts(finaldata)  
    // return;
    // }
    // fetchproducts();
    

    //async-await  
    // useEffect(() => {
    // fetch ('http://localhost:3000/products', {
    // method:"POST",
    // header:{'Content-Type':'application/json'},
    // body: JSON.stringify({})
    // })


    useEffect(()=>{
        //fetch('https://ecomm-backend-wtzd.onrender.com/products')
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data =>setproducts(data));
    },[])
        
    //filter out the products based on searchquery
    let filteredproducts=products.filter((p)=>{
        return p.title.toLowerCase().includes(searchquery.toLowerCase())
    })
    return (
    <>
    <div style={{display:"flex",flexWrap:"wrap"} }>
        {
            filteredproducts.map((e)=>{
                return <Card image={e.image} title={e.title} price={e.price}/>
            })
        }
    </div>
    </>
    )
}

export default Products
