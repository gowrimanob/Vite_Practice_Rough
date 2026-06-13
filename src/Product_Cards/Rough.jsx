import React, { useState } from 'react'

export default function Rough() {
    
    // const [obj]=useState({name:"Gowrimano"},{age:21},{gfrd:"Guna"},{bfrd:"Bro"},{bro:"Mahi"},{bro2:"Krish"},{sis:"Sanji"})

    const [search, setSearch] = useState("");
    const [obj] = useState({
        name: "Gowri",
        age: 21,
        city: "Chennai"       
    });

    const filterdata = Object.values(obj).filter((item) => item.toString().toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
            {Object.values(obj).map((item, index) => (
                <li key={index}>
                    {item}

                </li>
            ))}
            {/* This is another method by fetch data by keys and values */}
            {/* <ul>
                {Object.entries(obj).map(([key, value]) => (
                    <li key={key}>
                        {key} : {value}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}
