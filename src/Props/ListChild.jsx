import React from 'react'

export default function ListChild(props) {
  return (
    <div><ul>
        {props.f.map((fr,index)=>
        (<li key={index}>{fr}</li>))}
        </ul>
    </div>
  )
}
