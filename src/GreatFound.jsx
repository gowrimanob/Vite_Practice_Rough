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
     
        <input type="text" placeholder="Add your task" onChange={(e) => setName(e.target.value)} />
      
          <button onClick={disp}>Submit</button>
          {display && (
            <div className="c1">
               <h3>{display}</h3>
               
            </div>)}
    </div>
  );
}

// import React from 'react'

// export default function GreatFound() {
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <div>
//         <input type="text" placeholder="Add your task" />
//         <div>
//           <button>Submit</button>
//         </div>
//       </div>
//       <div>
//         <input type="text" placeholder="Add your task" />
//         <div>
//           <button>Submit</button>
//         </div>
//       </div>
//       <ul>
//         <li>
//           <span>Walk the dog</span>
//           <button>Delete</button>
//         </li>
//         <li>
//           <span>Water the plants</span>
//           <button>Delete</button>
//         </li>
//         <li>
//           <span>Wash the dishes</span>
//           <button>Delete</button>
//         </li>
//       </ul>
//     </div>
//   )
// }
