import React from "react"
import "./heroContainer.css"

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