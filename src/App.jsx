import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home/Home'
import SelectLoadProfiles from './components/SelectLoadProfiles/SelectLoadProfiles'
import LoadProfile from './components/LoadProfile/LoadProfile'

function App() {

  return (
    <div className="App">
      {/* <Home/> */}
      {/* <SelectLoadProfiles/> */}
      <LoadProfile/>
    </div>
  )
}

export default App
