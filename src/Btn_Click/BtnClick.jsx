import React, { useState } from 'react'

export default function BtnClick() {
  const[txt,setTxt]=useState("Not Logged in now ");
  const[btn,setBtn]=useState("LOGIN");

  function btnclick(e){
    e.preventDefault();
    setTxt("Logged In");
    setBtn("LOGOUT");

  }
  return (
    <div>
      <h1>{txt}</h1>
      <button  onClick={btnclick} style={{backgroundColor:{btnclick}?"white":"black"}}>{btn}</button>
      </div>
  )
}
