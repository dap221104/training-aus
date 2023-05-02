import React from 'react'

const DetailComponent = (props) => {
    
    return (
        <div>
            <h2>Name: {props.data.name}</h2>
            {/* <h2>Age: {props.data.age}</h2>
            <h2>City: {props.data.city}</h2>
            <h2>Country: {props.data.country}</h2> */}
        </div>
    )
}

export default DetailComponent