import React from 'react'
import Student from './Student';

export default function Task4Props(props) {
    const name="Gowrimano B";
    const age=21;
    const clas="BE-CSE";

    
  return (
    <div>
      <Student n={name}/>
      <Student a={age}/>
      <Student c={clas}/>
    </div>
  )
}
