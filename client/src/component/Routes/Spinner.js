// import React from 'react'

// const Spinner = () => {
//   return (
//     <div>
//     <span className="">Loading...</span>
// </div>
//   )
// }

// export default Spinner
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function App({path = "login"}) {
    const [count, setCount]=useState(3)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevValue)=>--prevValue)
        },1000)
        count === 0 && navigate(`/${path}`,{
          state:location.pathname
        })
        return () => clearInterval(interval)
    },[count, navigate, location, path])
  return (
      <div>
      <h1 className='text-center mt-20 font-bold '>Redirecting To you in {count}     second </h1>
      
 
      <div
      className="inline-block h-8 w-8 m-auto mt-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] justify-content-center align-items-center"
      role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] "
      >Loading...</span>
  </div>
  </div>
  
  );
}
