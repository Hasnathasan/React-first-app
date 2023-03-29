import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './Components/Shop/Shop'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <UserShow></UserShow>
    </div>
  )
}
function UserShow() {
  return(
    <div>
      <Navbar></Navbar>
      <Shop></Shop>
    </div>
  )
}



export default App
