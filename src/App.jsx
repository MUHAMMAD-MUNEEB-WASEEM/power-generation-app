import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home/Home'
import SelectLoadProfiles from './components/SelectLoadProfiles/SelectLoadProfiles'

function App() {

  return (
    <div className="App">
      {/* <Home/> */}
      <SelectLoadProfiles/>
    </div>
  )
}

export default App
