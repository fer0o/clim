import React from 'react'
import Spinner from './Spinner'

const Card = ({ showData, loadingData, weather, forecast }) => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth()
  const year = today.getFullYear()
  const date = `${day} / ${month} / ${year}`
  let url = ''
  let iconUrl = ''
  if (loadingData) {
    return <Spinner />
  }
  if (showData) {
    url = 'https://openweathermap.org/img/w/'
    iconUrl = url + weather.weather[0].icon + '.png'
  }
  return (
    <div>
      <div>
        {showData === true ? (
          <div className=' container m-auto w-auto '>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4  '>
              <div className='p-2 border-2  border-white '>
                <div className='block text-left   p-4  m-2  text-white font-bold  rounded-md absolute'>
                  <h3 className=' lg:text-6xl '>
                    {weather.name} , {weather.sys.country}
                  </h3>

                  <p className='mt-4 lg:text-6xl'>{date}</p>
                  <h1 className='mt-60 lg:text-8xl'>
                    {(weather.main.temp - 273.15).toFixed(1)}°C
                  </h1>
                  <p className=' lg:text-6xl'>
                    <img src={iconUrl} className='h-20' alt='icon' />
                    {weather.weather[0].description}
                  </p>
                </div>

                <img
                  src='https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='p-2 m-auto w-full h-[70vh]'
                />
              </div>
              <div className='border-2  border-white'>texto</div>
            </div>

            <div></div>
          </div>
        ) : (
          <h2 className='block text-center text-3xl text-white p-96'>
            No hay información
          </h2>
        )}
      </div>
    </div>
  )
}

export default Card
