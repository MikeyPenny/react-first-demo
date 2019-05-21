import React from "react"
import "./navbar.css"
// const React = require("react")
function Navbar(props) {

    return (
        <nav>
            <img src="/ironhackLogo.svg" alt="ironhack logo"/>    
            <h1>I am a navbar, {props.firstname} {props.lastname}</h1>
        </nav>

    )
}

// module.exports = Navbar
export default Navbar