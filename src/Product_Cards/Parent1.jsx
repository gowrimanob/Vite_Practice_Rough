import React, { useState } from 'react'
import lap from '../assets/Images/Laptop.png';
import mob from '../assets/Images/Mobile.png'
import search from '../assets/Images/Search.png'

export default function Parent1() {
    const arr = [
 {
   name:"Laptop",
   price:55000,
   image: lap
 },
 {
   name:"Mobile",
   price:20000,
   image: mob
 }
]

const[val,setVal]=useState("");
const[displayval,setDisplayval]=useState("");

function searchfunc(e){
    e.preventDefault();
    setDisplayval(val);
}
const filtersearch=arr.filter(prod=>
    prod.name.toLowerCase().includes(displayval.toLowerCase())
);

  return (
    <div> 
        <input type="text" placeholder='Search' onChange={(e)=>setVal(e.target.value)} />
        <img onClick={searchfunc} src={search} alt="" height={20} width={20} style={{paddingLeft:10}} />
        
        {filtersearch.map((prod,index)=>
        (
            <li  className='card2' key={index}>
                <img src={prod.image} alt="" height={70} width={80} style={{marginLeft:30}} /> <br />
                {prod.name}
            <h2>{prod.price}</h2>
            </li>
        ))}
    </div>
  )
}
