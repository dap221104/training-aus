import React from 'react'

const FilterComponent = (props) => {
    const object = {
        name: 'John',
        age: 30,
        city: 'New York',
        country: 'USA'
    }

    return (
        <div>
          <input onClick={() => props.sendData(object)} placeholder='By clicking here you can send data to detail screen'></input>
        </div>
    )
}

export default FilterComponent