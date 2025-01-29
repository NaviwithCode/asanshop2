import React from 'react'

const CardDashaboard = ({icon, title, value}) => {
  return (
    <>
    <div className='bg-gray-100 text-black p-4 rounded-lg shadow-md flex items-center space-x-6'>
      <div className='text-3xl text-gray-500'>{icon}</div>
    <div> 
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='tex'>{value}</p>
    </div>
    </div>
    </>
  )
}

export default CardDashaboard
