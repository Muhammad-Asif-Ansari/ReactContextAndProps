import React, { useContext } from 'react'
import MyContext from '../context/Context'
const Child = () => {

const myName = useContext(MyContext)
  return (
 <h1>{myName}</h1>
  )
}

export default Child