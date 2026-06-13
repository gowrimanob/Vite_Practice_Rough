import React from 'react'
import img from './assets/Images/Profile.png'

export default function Navbar() {
    return (
        <div>
            <img style={{
                position: "absolute",
                width: "100px",
                height: "63px",

            }} src={img} alt="Profile Image" />
            <ul style={{
                backgroundColor: "navy",
                display: "flex",
                padding: "20px",
                listStyle: "none"

            }}>
                <a
                    style={{
                        margin: "0px 0px 0px 80%",
                        padding: "2px 10px",
                        textDecoration: "none",
                        color: "red"
                    }}
                    href=""
                    onClick={(e) => alert("Home Clicked")}>
                    <li >Home</li></a>

                <a
                    style={{
                        textDecoration: "none",
                        color: "red"
                    }} href=""
                    onClick={(e) => alert("About Clicked")}>
                    <li style={{
                        justifyContent: "flex-end"
                    }}>About</li></a>

                <a style={{
                    textDecoration: "none",
                    color: "red"
                }}
                    href=""
                    onClick={(e) => alert("Contact Clicked")}>
                    <li style={{
                        margin: "0px 0px",
                        padding: "2px 10px"
                    }}>Contact</li></a>

            </ul>
        </div>
    )
}
