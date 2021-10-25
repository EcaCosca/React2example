import React from 'react'

const Greet = (props) => {
    console.log(props)
    return (
        <h1> Hello {props.name} is in the {props.class} class</h1>
    )
}

export default Greet