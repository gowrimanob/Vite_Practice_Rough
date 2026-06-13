import React from 'react'

export default function Employee({n,d,s}) {
  return (
    <div><h2>
        Name : {n}  <br />
        Department : {d} <br />
        Salary : {s} <br /></h2>
        <h2 style={{
          color: s >40000 ? "green" : "red"
          }}>
        Status : {s > 40000 ?  "High Salary"  : <p> Normal Salary </p> }</h2>
    </div>
  )
}
