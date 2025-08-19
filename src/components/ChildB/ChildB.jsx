import React, { createContext } from 'react'
import MyContext from '../context/Context'
function ChildB() {
    const user = createContext(MyContext)
  return (
    <div>
        {user}
    </div>
  )
}

export default ChildB