import React from 'react'
import UserManu from '../../component/UserManu'
import { useAuth } from '../../context/auth'
// import UserManu from '../../UserManu'
// import { useAuth } from '../../../context/auth'
const Profile = () => {
    const [auth] = useAuth()
  return (
    <header className="bg-white flex">
    <UserManu/>
<div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-bold rounded-full text-gray-900">All Users</h1>
  <div className=''>
  <h1 className= "mt-2 items-center flex box-content h-3 w-full py-3   rounded-md  text-2xl tracking-tight text-gray-900">Name : {auth?.user?.name}</h1>
  <h1 className= "mt-2 items-center flex box-content h-3 w-full py-3 rounded-md  text-2xl tracking-tight text-gray-900">Email : {auth?.user?.email}</h1>
  <h1 className= "mt-2 items-center flex box-content h-3 w-full py-3 rounded-md  text-2xl tracking-tight text-gray-900">Phone : {auth?.user?.phone}</h1>
  <h1 className= "mt-2 items-center flex box-content h-3 w-full py-3 rounded-md  text-2xl tracking-tight text-gray-900">Address : {auth?.user?.address}</h1>
  </div>
</div>
</header>
  )
}

export default Profile
