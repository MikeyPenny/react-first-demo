import React from "react"

// function Article(props) {
//     return (
//         <p>{props.children}</p>
//     )
// }

class Article extends React.Component {

    render() {
        return(
            <p>{this.props.children}</p>
        )
    }
}


export default Article