import React, { useState } from 'react'

export default function Rough() {[]
    const [obj]=useState([{name:"Gowrimano"},{age:21},{gfrd:"Guna"},{bfrd:"Bro"},{bro:"Mahi"},{bro2:"Krsih"},{sis:"Sanji"}])
  return (
    <div>
        {obj.map((o,index)=>(
            <li key={index}>
                {o.name}
                {o.age}
                {o.gfrd}
                {o.bfrd}
                {o.bro}
                {o.bro2}
                {o.sis}
            
            </li>
        ))}
    </div>
  )
}
