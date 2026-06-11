import React, { useEffect, useState } from 'react'

export default function HooksUseeff() {
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Clicked")
    })
  return (
    <div>
      <h3>Click Btn & Check Console</h3>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}
