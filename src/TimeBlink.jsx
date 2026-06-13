import React, { useEffect, useState } from 'react'

export default function TimeBlink() {
    const[count,setCount]=useState(1);

    useEffect(()=>{
        const timer= setTimeout(() => {

            setCount((prev)=>prev+1);
        }, 2000);
        return ()=> clearInterval(timer);
    },[count])
    
  return (
    <div>TimeBlink - Counter
         <h1>{count}</h1>
    </div>
   
  )
}
