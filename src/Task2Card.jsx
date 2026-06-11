import React, { useState } from 'react'

export default function Task2Card() {
    const [name, setName] = useState("");
    const [dname, setDname] = useState("");

    const [dept, setDept] = useState("");
    const [ddept, setDdept] = useState("");

    const [age, setAge] = useState("");
    const [dage, setDage] = useState("");

    function pressok(e) {
        e.preventDefault();
        setDname(name);
        setDdept(dept);
        setDage(age);


    }
    return (
        <div>
            <div>
                <form action="" onSubmit={pressok}>
                    <input type="text" placeholder='Your Name' className='ip' onChange={(e) => setName(e.target.value)} />




                    <input type="text" placeholder='Your Department' className='ip' onChange={(e) => setDept(e.target.value)} />


                    <input type="number" placeholder='Your Age' className='ip' onChange={(e) => setAge(e.target.value)} />

                    <button type='submit'>Okay</button>

                    {dname && (

                        <div className='card'>
                            <h3 style={{ color: "darkblue" }}>Candidate Details</h3>
                            
                            <h1> Name :{dname}</h1>

                            <h1>Dept : {ddept ? ddept : "Not Provided"}</h1>

                            <h1>Age : {dage}</h1>

                            <h1>Status : {dage > 18 ? "Adult" : "Minor"}</h1>
                        </div>

                    )}

                </form>
            </div>
        </div>
    )
}
