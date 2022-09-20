import React from 'react'
import Spinner from './Spinner'

const Card = ({ showData, loadingData, weather, forecast }) => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth()
  const year = today.getFullYear()
  const date = `${day} / ${month} / ${year}`
  if (loadingData) {
    return <Spinner />
  }
  return (
    <div>
      <div>
        {showData === true ? (
          <div>
            <h2 className='block text-center  bg-white p-4 w-36    m-auto text-xl font-bold  rounded-md '>
              {weather.name}
            </h2>
            <div className='container flex justify-center m-auto p-2'>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 border-2 border-white'>
                <img
                  src='https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='border-2 border-white p-2 '
                />
                <div className='text-2xl text-white'>Texto</div>
              </div>
            </div>
          </div>
        ) : (
          <h2>No hay información</h2>
        )}
      </div>
    </div>
  )
}

export default Card
