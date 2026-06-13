import React from 'react'

export default function ListChild(props) {
  return (
    <div><ul>
        {props.f.map((fr,i)=>
        (<li key={i}>{fr}</li>))}
        </ul>
    </div>
  )
}
