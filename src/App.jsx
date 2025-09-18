import React, { useContext } from 'react'
import Navbar from "../src/components/Navbar/Navbar"
import Card from './components/Card/Card'
import MyContext from './components/context/Context'
import ChildA from './components/ChidA/ChildA'
import ChildB from './components/ChildB/ChildB'
const App = () => {

  const name = useContext(MyContext)
  return (
 
<>
<MyContext.Provider  value={"Asif"}>
      <ChildB/>
   </MyContext.Provider>
  <MyContext.Provider  value={"Asif"}>
      <ChildB/>
   </MyContext.Provider>
   <MyContext.Provider  value={"Asif"}>
      <ChildA/>
   </MyContext.Provider>
    <MyContext.Provider  value={"Asif"}>
      <ChildB/>
   </MyContext.Provider>
  <MyContext.Provider  value={"Asif"}>
      <ChildA/>
   </MyContext.Provider>
    <MyContext.Provider  value={"Asif"}>
      <ChildB/>
   </MyContext.Provider>
</>
  )
}

export default App
