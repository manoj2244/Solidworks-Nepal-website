import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './index'
import ProfileDetails from './profile-component/ProfileDetails'

const Home = () => {
  return (
    <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/profile' element={<ProfileDetails/>}/>

    </Routes>
  )
}

export default Home