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
      {/* <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/>
      <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/>
      <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/>
      <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/>
      <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/> */}


      {/* DEnmark */}
      <LoadProfile loadProfileData={[2915.1,2806,2741.4,2747,2725.9,2878.6,3425.1,4038.9,4327.1,4397.8,4488.7,4468.6,4387.8,4400.2,4286.1,4135.8,4049.3,4202.8,4099.4,3910.7,3710.9,3493,3360.1,3122.5,
]} capitalFactor={1600}  interest_p={-0.0075} fuel_p={1} consumption={3.9/1000}/>  

      {/* Bulgaria */}
      {/* <LoadProfile loadProfileData={[3431, 3151, 3038, 3003, 2980, 3075, 3452, 3684, 3969, 3960, 4105, 4126, 3991, 4050, 4057, 4074, 4053, 3968, 4055, 4138, 4171, 4215, 4073, 3753]} capitalFactor={3500}  interest_p={0} fuel_p={136} consumption={0.0005}/>   */}
    </div>
  )
}

export default App
