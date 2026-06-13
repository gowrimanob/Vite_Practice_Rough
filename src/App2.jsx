import React from 'react'
import Employee from './Employee';

export default function App2() {
    const Name = "Arun";
const Department = "IT";
const Salary = 200000000;
  return (
    <div>
        <Employee n={Name} d={Department} s={Salary} />
    </div>
  )
}
