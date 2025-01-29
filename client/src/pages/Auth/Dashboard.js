import React from 'react'
import UserManu from '../../component/UserManu'
import { useAuth } from '../../context/auth'
// import { useAuth } from '../../context/auth'
// import UserManu from '../../UserManu'
// import { useAuth } from '../../../context/auth'
// import Head from './head'

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <header className="bg-white flex ">
        <UserManu/>
          <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
            <h1>User Dashboard</h1>
            <h1 className=" box-content h-3 w- p-3 border-2 rounded-md shadow items-center flex text-2xl tracking-tight text-gray-900 ">Name : {auth?.user?.name}</h1>
            <h1 className= "mt-2 items-center flex box-content h-3 w- p-3 border-2 rounded-md shadow text-2xl tracking-tight text-gray-900">Email : {auth?.user?.email}</h1>
            {/* <h1 className=" mt-2 border border-black rounded text-2xl tracking-tight text-gray-900">Contact : {auth?.user?.phone}</h1>
            <h1 className="mt-2 border border-black rounded text-2xl tracking-tight text-gray-900">Address : {auth?.user?.address}</h1> */}
          </div>
        
        </header>
        
  )
}

export default Dashboard
