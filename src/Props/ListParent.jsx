import React from 'react'
import ListChild from './ListChild';

export default function ListParent() {
    const fruits = ["Apple", "Banana", "Mango"];
  return (
    <div>
        <ListChild 
        f={fruits}
        />
    </div>
  )
}
