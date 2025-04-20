import React from 'react'
import {Usecounter} from './Counter'
const Profile:React.FC=()=> {
    const user=Usecounter();
  return (
    <div className='h-screen w-screen bg-black flex justify-center items-center text-white lg:text-5xl font-medium text-2xl'>
        <h1>Welcome {user?.username} !</h1>
    </div>
  )
}

export default Profile