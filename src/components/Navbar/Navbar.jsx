import React from 'react'
import Card from '../Card/Card'

const Navbar = (props) => {
    // console.log(props)
  return (
    <div>
    <li>{props.name}</li>
    <li>{props.age}</li>
    <li>{props.studentId}</li>
    </div>
  )
}

export default Navbar