import React, { useState } from 'react'

export default function Task1() {
    const [name, setName] = useState("");
    const [displayname, setDisplayname] = useState("");

    function handclick(e) {
        e.preventDefault();
        setDisplayname(name)
    }
    return (
        <div>
            <form action="" onSubmit={handclick}>
                <input type="text" placeholder='Enter a name ' onChange={(e) => setName(e.target.value)} />

                <button type='submit'>Submit</button>

                {/* {displayname && <h1>{displayname}</h1>} */}

                <h1
                    style={{
                        color: displayname.length > 5 ? "green" : "red"
                    }}
                >
                    {displayname}
                </h1>
            </form>
        </div>
    )
}
