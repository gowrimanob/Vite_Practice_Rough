import React from 'react'

export default function Task3List() {

    const list = [
        { id: "1", name: "Gowri", class: "cse" },
        { id: "2", name: "sanji", class: "cse" },
        { id: "3", name: "Guna", class: "cse" }
    ];

    return (
        <div>Task3List


            {list.map(val =>
            (
                <li key={val.id}>
                    {val.id}
                    {val.name} {val.class}
                </li>
            ))}
        </div>
    )
}
