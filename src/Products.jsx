
import {useState,useEffect} from "react"
import Card from './Card'
function Products({searchquery}) {
    const [products,setproducts] =useState([])
    //fetch the products from fakestore api
    /*async function fetchproducts(){
        let data=await fetch('https://fakestoreapi.com/products')
        let finaldata=await data.json() 
        setproducts(finaldata)  
        return;
    }
    fetchproducts();*/
    //async-await  

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data =>setproducts(data));
        },[])
        

    // useEffect(()=>{
    //     fetch ('http://localhost:3000/products', {
    //     method:"POST",
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body: JSON.stringify({
    //         id:25,
    //         title:"shoe",
    //         price:10000,
    //         image:"http://image.example.png"
    //     })
    // })
    // }, [])

    //filter out the products based on searchquery
    let filteredproducts=products.filter((p)=>{
        return p.title.toLowerCase().includes(searchquery.toLowerCase())
    })

    return (
    <div style={{display:"flex",flexWrap:"wrap"} }>
        {
        filteredproducts.map((e)=>{
        <Card image={e.image} title={e.title} price={e.price}/>
        })
    }
    </div>
    );
}

export default Products
