import React from 'react'
import Child from './Child';

export default function Parent() {
    const product = "Laptop";
const price = 55000;
const stock = 10;
  return (
    <div>
        <Child p={product} pr={price} s={stock} />
    </div>
  )
}
