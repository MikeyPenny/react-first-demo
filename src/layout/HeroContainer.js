import React from "react"
import "./layout.css"

function Layout(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

// const Layout = (props) =>
//     (
//         <div className="container">
//             {props.children}
//         </div>
//     )

export default Layout