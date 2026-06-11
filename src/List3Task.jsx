import React, { useState } from 'react'

export default function List3Task() {
  const[list,setList]=useState("");
  const[displaylist,setDisplaylist]=useState([]);

  function lisop(e){
    e.preventDefault();
    setDisplaylist(list.split(','));
  }

  return (
    <div>
      <form action="" onSubmit={lisop}>

      <input 
      type="text" 
      placeholder='Give a List separated by commas' 
      onChange={((e)=>setList(e.target.value)
      
      )} />
      <button type='submit'>Make List</button>
      </form>

      <h1>
        <ul>
        {displaylist.map((i,index)=>
      ( <li key={index}>{index}){i.trim()}</li>))}
      </ul>
      </h1>

    </div>
  )
}
