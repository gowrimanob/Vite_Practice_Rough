import React from 'react'
import p from './assets/Images/Profile.png'

export default function ProfileCard() {
  const name="Gowri";
  const dept="CSE";
  return (
    <div className='card'>
        <img src={p} alt="" />
        <h3>Name : {name} <br />
          Department : {dept}
        </h3>
        <button>Profile</button>


    </div>
  )
}
