import React, { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");

  function disp(e) {
    e.preventDefault();
    setDisplay(name);
  }

  function del() {
    setDisplay("");
  }

  return (
    <div>
      <h1>Todo List</h1>
      <h1>Todo List</h1>
     
        <input type="text" placeholder="Add your task" onChange={(e) => setName(e.target.value)} />
      
          <button onClick={disp}>Submit</button>
          {display && (
            <div className="c1">
               <h3>{display}</h3>
               
            </div>)}
    </div>
  );
}
