import React from 'react'

export default function Child({ p, pr, s }) {
    return (
        <div>
            <h1>Product Name : {p}</h1>
            <h1>Price : {pr}</h1>
            <h1 style={{color:s==true? "green" : "red"}}
            >Availability :
                {s ? "In Stock"  : "Out Of Stock" }
            </h1>
        </div>
    )
}
