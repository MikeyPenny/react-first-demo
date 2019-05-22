import React from "react"
import "./flexContainer.css"

function FlexContainer(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default FlexContainer