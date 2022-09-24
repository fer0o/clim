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
  let iconUrl_3hrs = ''
  let iconUrl_6hrs = ''
  let iconUrl_9hrs = ''
  // cambio de fechas
  let forecastDate_3 = ''
  let forecastDate_6 = ''
  let forecastDate_9 = ''
  if (loadingData) {
    return <Spinner />
  }
  if (showData) {
    url = 'https://openweathermap.org/img/w/'
    iconUrl = url + weather.weather[0].icon + '.png'

    iconUrl_3hrs = url + forecast.list[1].weather[0].icon + '.png'
    iconUrl_6hrs = url + forecast.list[2].weather[0].icon + '.png'
    iconUrl_9hrs = url + forecast.list[3].weather[0].icon + '.png'

    forecastDate_3 =
      // forecast.list[1].dt_txt.substring(8, 10) +
      // ' / ' +
      // forecast.list[1].dt_txt.substring(5, 7) +
      // '/' +
      // forecast.list[1].dt_txt.substring(0, 4) +
      // '' +
      // forecast.list[1].dt_txt.substring(11, 13)
      `${forecast.list[1].dt_txt.substring(
        8,
        10
      )} / ${forecast.list[1].dt_txt.substring(
        5,
        7
      )}/ ${forecast.list[1].dt_txt.substring(
        0,
        4
      )} en ${forecast.list[1].dt_txt.substring(11, 13)}`

    // forecastDate_6 =
    //   forecast.list[2].dt_txt.substring(8, 10) +
    //   ' / ' +
    //   forecast.list[2].dt_txt.substring(5, 7) +
    //   '/' +
    //   forecast.list[2].dt_txt.substring(0, 4) +
    //   '' +
    //   forecast.list[2].dt_txt.substring(11, 13)
    forecastDate_6 = `${forecast.list[2].dt_txt.substring(
      8,
      10
    )}/ ${forecast.list[2].dt_txt.substring(
      5,
      7
    )}/ ${forecast.list[2].dt_txt.substring(
      0,
      4
    )} en ${forecast.list[2].dt_txt.substring(11, 13)}`

    // forecastDate_9 =
    //   forecast.list[3].dt_txt.substring(8, 10) +
    //   ' / ' +
    //   forecast.list[3].dt_txt.substring(5, 7) +
    //   '/' +
    //   forecast.list[3].dt_txt.substring(0, 4) +
    //   '' +
    //   forecast.list[3].dt_txt.substring(11, 13)
    forecastDate_9 = `${forecast.list[3].dt_txt.substring(
      8,
      10
    )} / ${forecast.list[3].dt_txt.substring(
      5,
      7
    )} / ${forecast.list[3].dt_txt.substring(
      0,
      4
    )} en ${forecast.list[3].dt_txt.substring(11, 13)} `
  }
  return (
    <div>
      <div>
        {showData === true ? (
          <div className=' container m-auto w-auto '>
            <div className=' grid grid-cols-1 lg:grid-cols-6   mb-4 border-2  border-white  '>
              <div className='border-2 border-r border-white col-span-2'>
                <div className='block text-left   p-4  m-2  text-white font-bold  rounded-md absolute'>
                  <h3 className=' lg:text-5xl '>
                    {weather.name} , {weather.sys.country}
                  </h3>

                  <p className='mt-4 lg:text-4xl'>{date}</p>
                  <h1 className='mt-60 lg:text-9xl'>
                    {(weather.main.temp - 273.15).toFixed(1)}°C
                  </h1>
                  <p className=' lg:text-4xl'>
                    <img src={iconUrl} className='h-20' alt='icon' />
                    {weather.weather[0].description}
                  </p>
                </div>

                <img
                  src='https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='p-2 m-auto w-full h-[70vh]'
                />
              </div>
              <div className='col-span-4 block text-center text-xl text-white font-bold p-2 '>
                <div className='space-y-8'>
                  <h5>
                    Temperatura Máxima:{' '}
                    {(weather.main.temp_max - 273.15).toFixed(1)}°C
                  </h5>
                  <h5>
                    Temperatura Mínima:{' '}
                    {(weather.main.temp_min - 273.15).toFixed(1)}°C
                  </h5>
                  <h5>
                    Sensación Térmica:{' '}
                    {(weather.main.feels_like - 273.15).toFixed(1)}°C
                  </h5>
                  <h5>Humedad: {weather.main.humidity}%</h5>
                  <h5>Velocidad del viento: {weather.wind.speed} m/s</h5>
                </div>

                <hr className='m-4' />
                <h2 className='text-3xl'>Proximas temperaturas</h2>
                <div className=' grid grid-cols-3 gap-2 mt-14 text-2xl '>
                  {/* clima 3 hrs */}
                  <div className=''>
                    <p>{forecastDate_3} hrs</p>
                    <p>
                      <img
                        src={iconUrl_3hrs}
                        alt='icon'
                        className='h-16 m-auto'
                      />
                      {forecast.list[1].weather[0].description}
                    </p>
                  </div>
                  {/* clima 6 hrs */}
                  <div className=' '>
                    <p>{forecastDate_6} hrs</p>
                    <p>
                      <img
                        src={iconUrl_6hrs}
                        alt='icon'
                        className='h-16 m-auto'
                      />
                      {forecast.list[2].weather[0].description}
                    </p>
                  </div>
                  {/* clima 9 hrs */}
                  <div className=''>
                    <p>{forecastDate_9} hrs</p>
                    <p>
                      <img
                        src={iconUrl_9hrs}
                        alt='icon'
                        className='h-16 m-auto'
                      />
                      {forecast.list[2].weather[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
